<?php

namespace Database\Seeders;

use App\Models\Conductor;  // Importa el modelo Conductor
use Faker\Factory as Faker;  // Importa Faker
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ConductorTableSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run() {
        $faker = Faker::create('es_ES');

        foreach (range(1, 20) as $index) {
            Conductor::create([
                'cedula' => $faker->unique()->numberBetween(1000000000, 9999999999),
                'primer_nombre' => $faker->firstName,
                'segundo_nombre' => $faker->optional()->firstName,
                'apellidos' => $faker->lastName . ' ' . $faker->lastName,
                'direccion' => $faker->address,
                'telefono' => '3' . $faker->numberBetween(0, 9) . $faker->numerify('#######'),
                'ciudad' => $faker->randomElement(['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena']),
            ]);
        }
    }
}