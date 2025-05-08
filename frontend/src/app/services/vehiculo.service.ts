import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';  // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private apiUrl = 'http://localhost:8000/api/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  getInforme(): Observable<Vehiculo[]> {  // Asume que el informe devuelve un array de Vehiculo
    return this.http.get<Vehiculo[]>(`${this.apiUrl}/informe-vehiculos`);
  }

  createVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.apiUrl, vehiculo);
  }
  getVehiculosConInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehiculos`);
  }
}