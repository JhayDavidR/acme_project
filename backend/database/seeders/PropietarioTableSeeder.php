<?php

namespace Database\Seeders;

use App\Models\Propietario;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PropietarioTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create('es_ES');

        foreach (range(1, 20) as $index) {
            Propietario::create([
                'cedula' => $faker->unique()->numberBetween(2000000000, 2999999999),
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