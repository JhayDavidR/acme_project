<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    // public $timestamps = false;
    protected $table = 'vehiculos';
    
    protected $fillable = [
        'placa',
        'color',
        'marca',
        'tipo_vehiculo',
        'conductor_id', // Asegúrate que coincida con la migración
        'propietario_id'
    ];
    
    // Relación con Conductor
    public function conductor()
    {
        return $this->belongsTo(Conductor::class, 'conductor_id', 'cedula');
    }
    
    // Relación con Propietario
    public function propietario()
    {
        return $this->belongsTo(Propietario::class, 'propietario_id', 'cedula');
    }
}