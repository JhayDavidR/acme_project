<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehiculos = Vehiculo::with(['conductor', 'propietario'])->get();
        return response()->json($vehiculos);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'placa' => 'required|string|max:10|unique:vehiculos',
            'color' => 'required|string|max:50',
            'marca' => 'required|string|max:100',
            'tipo_vehiculo' => 'required|in:particular,comercial,oficial,publico',
            'conductor_id' => 'required|string|exists:conductores,cedula',
            'propietario_id' => 'required|string|exists:propietarios,cedula'
        ]);
    
        // Asegurar que el tipo de vehículo esté en minúsculas
        $validated['tipo_vehiculo'] = strtolower($validated['tipo_vehiculo']);
    
        $vehiculo = Vehiculo::create($validated);
    
        return response()->json([
            'message' => 'Vehículo registrado exitosamente',
            'data' => $vehiculo
        ], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(Vehiculo $vehiculo)
    {
        // Implementar si necesitas mostrar un vehículo específico
        return response()->json($vehiculo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehiculo $vehiculo)
    {
        // Implementar si necesitas actualizar vehículos
        $vehiculo->update($request->all());
        return response()->json($vehiculo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehiculo $vehiculo)
    {
        // Implementar si necesitas eliminar vehículos
        $vehiculo->delete();
        return response()->json(null, 204);
    }
}