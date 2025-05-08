import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConductorService } from '../../services/conductor.service';
import { Conductor } from '../../models/vehiculo.model';

@Component({
  selector: 'app-conductor-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Asegúrate de tener FormsModule aquí
  templateUrl: './conductor-list.component.html',
})
export class ConductorListComponent implements OnInit {
  conductores: Conductor[] = [];
  filtro: string = '';
  isLoading = true;
  error: string | null = null;

  constructor(private conductorService: ConductorService) {}

  ngOnInit() {
    this.loadConductores();
  }

  loadConductores() {
    this.isLoading = true;
    this.conductorService.getConductores().subscribe({
      next: (data) => {
        this.conductores = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading conductores:', err);
        this.error = 'Error al cargar los conductores';
        this.isLoading = false;
      }
    });
  }

  get conductoresFiltrados(): Conductor[] {
    const f = this.filtro.toLowerCase();
    return this.conductores.filter(c =>
      c.primer_nombre.toLowerCase().includes(f) ||
      c.segundo_nombre?.toLowerCase().includes(f) ||
      c.apellidos.toLowerCase().includes(f) ||
      c.ciudad.toLowerCase().includes(f)
    );
  }
}
