<?php

namespace Database\Seeders;

use App\Models\Vehiculo;
use App\Models\Conductor;
use App\Models\Propietario;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class VehiculoTableSeeder extends Seeder
{
    public function run() {
        $faker = Faker::create('es_ES');
    
        // Obtener todas las cédulas existentes
        $cedulasConductores = Conductor::pluck('cedula')->toArray();
        $cedulasPropietarios = Propietario::pluck('cedula')->toArray();
    
        foreach (range(1, 20) as $index) {
            Vehiculo::create([
                'placa' => strtoupper($faker->bothify('???###')),
                'color' => $faker->safeColorName,
                'marca' => $faker->randomElement(['Toyota', 'Nissan']),
                'tipo_vehiculo' => $faker->randomElement(['particular', 'publico','oficial', 'comercial']),
                'conductor_id' => $faker->randomElement($cedulasConductores), // Usa solo cédulas existentes
                'propietario_id' => $faker->randomElement($cedulasPropietarios), // Usa solo cédulas existentes
            ]);
        }
    }
}