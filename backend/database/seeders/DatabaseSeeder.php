<?php

use Database\Seeders\ConductorTableSeeder;
use Database\Seeders\PropietarioTableSeeder;
use Database\Seeders\VehiculoTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    public function run() {
        $this->call([
            ConductorTableSeeder::class,
            PropietarioTableSeeder::class,
            VehiculoTableSeeder::class,
        ]);
    }
}