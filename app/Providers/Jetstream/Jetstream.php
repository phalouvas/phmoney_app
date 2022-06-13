<?php
namespace App\Providers\Jetstream;

use Laravel\Jetstream\Jetstream as JetstreamJetstream;

class Jetstream extends JetstreamJetstream{
    /**
     * Manage Jetstream's Inertia settings.
     *
     * @return \App\Providers\Jetstream\InertiaManager
     */
    public static function inertia()
    {
        if (is_null(static::$inertiaManager)) {
            static::$inertiaManager = new InertiaManager;
        }

        return static::$inertiaManager;
    }
}
