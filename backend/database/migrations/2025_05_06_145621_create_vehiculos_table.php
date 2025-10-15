<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('vehiculos', function (Blueprint $table) {
            // Cambiado a id autoincremental para mejor manejo con Eloquent
            $table->id();

            $table->string('placa', 20)->unique();
            $table->string('color', 50)->nullable();
            $table->string('marca', 50);
            $table->string('tipo_vehiculo', 20)->default('particular');

            $table->string('conductor_id', 20)->nullable();
            $table->string('propietario_id', 20);

            $table->timestamps();

            // Relaciones corregidas
            $table->foreign('conductor_id')
                ->references('cedula')
                ->on('conductores')
                ->onDelete('set null');

            $table->foreign('propietario_id')
                ->references('cedula')
                ->on('propietarios')
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('vehiculos');
    }
};
