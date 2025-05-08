import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private apiUrl = 'http://localhost:8000/api/propietarios'; // Agregar /api

  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear un nuevo  propietario
  crearPropietario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}