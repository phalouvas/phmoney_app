<?php

namespace App\Providers\Jetstream;

use App\Models\Portfolio\Slot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\Jetstream\Jetstream;
use Laravel\Jetstream\InertiaManager as JetstreamInertiaManager;

class InertiaManager extends JetstreamInertiaManager
{

    /**
     * Render the given Inertia page.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $page
     * @param  array  $data
     * @return \Inertia\Response
     */
    public function render(Request $request, string $page, array $data = [])
    {
        if (isset($this->renderingCallbacks[$page])) {
            foreach ($this->renderingCallbacks[$page] as $callback) {
                $data = $callback($request, $data);
            }
        }

        if (Jetstream::hasTeamFeatures() && $request->user()) {
            $request->user()->currentTeam;
        }

        $user = array_merge($request->user()->toArray(), array_filter([
            'all_teams' => Jetstream::hasTeamFeatures() ? $request->user()->allTeams()->values() : null,
        ]), [
            'two_factor_enabled' => !is_null($request->user()->two_factor_secret),
        ]);
        return response($data);
    }
}
