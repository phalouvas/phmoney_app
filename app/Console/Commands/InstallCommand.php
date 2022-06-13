<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'phmoney_app:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the PHMoney application';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->setConfigDatabase();
        $this->line('');
        $this->info('PHMoney installed successfully.');
    }

    /**
     * Set the connection in database config file
     *
     * @return void
     */
    protected function setConfigDatabase() {
        // set in config file
        $connection_name = DB::getDefaultConnection();
        $connections = config('database.connections');
        $default_connection = $connections[$connection_name];
        $default_connection['prefix'] = 'phmacs_';
        $default_connection['strict'] = 0;
        $path = __DIR__ . '/../../../config/database.php';
        $search = "'phmoney_acs' => [],";
        $replace = "'phmoney_acs' => [" . PHP_EOL;
        foreach ($default_connection as $key => $value) {
            $replace .= "           '$key' => ";
            if (is_string($value)) {
                $replace .= "'$value'," . PHP_EOL;
            }
            elseif (is_array($value)) {
                $replace .= "[]," . PHP_EOL;
            }
            elseif (is_null($value)) {
                $replace .= "null," . PHP_EOL;
            }
            else {
                $replace .= "$value," . PHP_EOL;
            }
        }
        $replace .= "       ],";
        $this->replaceInFile($search, $replace, $path);

        //set default connection
        $path = __DIR__ . '/../../../.env';
        $search = "DB_CONNECTION=mysql";
        $replace = "DB_CONNECTION=phmoney_acs";
        $this->replaceInFile($search, $replace, $path);

    }

    /**
     * Replace a given string within a given file.
     *
     * @param  string  $search
     * @param  string  $replace
     * @param  string  $path
     * @return void
     */
    protected function replaceInFile(string $search, string $replace, string $path)
    {
        file_put_contents($path, str_replace($search, $replace, file_get_contents($path)));
    }
}
