import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private apiUrl = 'http://localhost:8000/api/conductores';

  constructor(private http: HttpClient) {}

  // Obtener lista de conductores
  getConductores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear un nuevo conductor
  crearConductor(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
