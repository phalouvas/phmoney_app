<?php

namespace App\Providers;

use App\Actions\Jetstream\AddTeamMember;
use App\Actions\Jetstream\CreateTeam;
use App\Actions\Jetstream\DeleteTeam;
use App\Actions\Jetstream\DeleteUser;
use App\Actions\Jetstream\InviteTeamMember;
use App\Actions\Jetstream\RemoveTeamMember;
use App\Actions\Jetstream\UpdateTeamName;
use App\Models\Portfolio\Taxtable;
use App\Providers\Jetstream\Jetstream;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class JetstreamServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->configurePermissions();

        Jetstream::createTeamsUsing(CreateTeam::class);
        Jetstream::updateTeamNamesUsing(UpdateTeamName::class);
        Jetstream::addTeamMembersUsing(AddTeamMember::class);
        Jetstream::inviteTeamMembersUsing(InviteTeamMember::class);
        Jetstream::removeTeamMembersUsing(RemoveTeamMember::class);
        Jetstream::deleteTeamsUsing(DeleteTeam::class);
        Jetstream::deleteUsersUsing(DeleteUser::class);

        Jetstream::inertia()->whenRendering(
            'Teams/Show',
            function (Request $request, array $data) {
                return array_merge($data, ['taxtables' => Taxtable::where('team_id', $request->user()->current_team_id)->get()]);
            }
        );
    }

    /**
     * Configure the roles and permissions that are available within the application.
     *
     * @return void
     */
    protected function configurePermissions()
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::role('admin', 'Administrator', [
            'create',
            'read',
            'update',
            'delete',
        ])->description('Administrator users can perform any action.');

        Jetstream::role('editor', 'Editor', [
            'read',
            'create',
            'update',
        ])->description('Editor users have the ability to read, create, and update.');
    }
}
