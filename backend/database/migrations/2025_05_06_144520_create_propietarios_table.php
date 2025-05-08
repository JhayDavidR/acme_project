<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('propietarios', function (Blueprint $table) {
            $table->string('cedula', 20)->primary();
            $table->string('primer_nombre', 50);
            $table->string('segundo_nombre', 50)->nullable();
            $table->string('apellidos', 100);
            $table->string('direccion')->nullable();
            $table->string('telefono', 20)->nullable();
            $table->string('ciudad', 100)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('propietarios');
    }
};
