// Conductor es el que tiene el campo cedula
export interface Conductor {
  cedula: string;
  primer_nombre: string;
  segundo_nombre?: string;  // Opcional
  apellidos: string;
  direccion: string;
  telefono: string;
  ciudad: string;
}

// Propietario es igual a Conductor pero sin el campo cedula
export interface Propietario {
  cedula: string;
  primer_nombre: string;
  segundo_nombre?: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  ciudad: string;
}

// Vehiculo con referencia a Conductor y Propietario
export interface Vehiculo {
  placa: string;
  color: string;
  marca: string;
  tipo_vehiculo: 'particular' | 'publico';
  conductor: Conductor;
  propietario: Propietario;  
}
