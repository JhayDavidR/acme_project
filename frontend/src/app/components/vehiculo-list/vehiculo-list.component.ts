import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo.model';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehiculo-list.component.html',
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  filtro: string = '';
  isLoading = true;
  error: string | null = null;

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.isLoading = true;
    this.error = null;
    
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading vehicles:', err);
        this.error = 'Error al cargar los vehículos';
        this.isLoading = false;
      }
    });
  }

  // Método para filtrar resultados por placa, nombre o apellido
  get vehiculosFiltrados(): Vehiculo[] {
    const f = this.filtro.toLowerCase();
    return this.vehiculos.filter(v =>
      v.placa?.toLowerCase().includes(f) ||
      v.conductor?.primer_nombre?.toLowerCase().includes(f) ||
      v.conductor?.segundo_nombre?.toLowerCase().includes(f) ||
      v.conductor?.apellidos?.toLowerCase().includes(f) ||
      v.propietario?.primer_nombre?.toLowerCase().includes(f) ||
      v.propietario?.segundo_nombre?.toLowerCase().includes(f) ||
      v.propietario?.apellidos?.toLowerCase().includes(f)
    );
  }
}
