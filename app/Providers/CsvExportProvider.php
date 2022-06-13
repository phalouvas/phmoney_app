<?php

namespace App\Providers;

use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class CsvExportProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Collection::macro('toInlineCsv', function (array $headers) {
            $csvString = $this->map(function($value, $key) use($headers) {
                    return $value->only($headers)->flatten()->implode(',');
                })
                ->prepend(implode(',', $headers))
                ->implode("\n");


            return $csvString;
        });
    }
}
