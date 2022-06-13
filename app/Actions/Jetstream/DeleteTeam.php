<?php

namespace App\Actions\Jetstream;

use Illuminate\Support\Facades\Storage;
use Laravel\Jetstream\Contracts\DeletesTeams;
use Laravel\Jetstream\Events\TeamDeleted;

class DeleteTeam implements DeletesTeams
{
    /**
     * Delete the given team.
     *
     * @param  mixed  $team
     * @return void
     */
    public function delete($team)
    {
        $team->purge();
    }
}
