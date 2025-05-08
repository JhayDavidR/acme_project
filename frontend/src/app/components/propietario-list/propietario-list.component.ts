import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de tener esto
import { PropietarioService } from '../../services/propietario.service';
import { Propietario } from '../../models/vehiculo.model';

@Component({
  selector: 'app-propietario-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Aquí debe estar FormsModule
  templateUrl: './propietario-list.component.html',
})
export class PropietarioListComponent implements OnInit {
  propietarios: Propietario[] = [];
  filtro: string = '';
  isLoading = true;
  error: string | null = null;

  constructor(private propietarioService: PropietarioService) {}

  ngOnInit() {
    this.loadPropietarios();
  }

  loadPropietarios() {
    this.isLoading = true;
    this.propietarioService.getPropietarios().subscribe({
      next: (data) => {
        this.propietarios = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar propietarios:', err);
        this.error = 'Error al cargar propietarios';
        this.isLoading = false;
      }
    });
  }

  get propietariosFiltrados(): Propietario[] {
    const f = this.filtro.toLowerCase();
    return this.propietarios.filter(p =>
      p.primer_nombre.toLowerCase().includes(f) ||
      p.segundo_nombre?.toLowerCase().includes(f) ||
      p.apellidos.toLowerCase().includes(f) ||
      p.ciudad.toLowerCase().includes(f)
    );
  }
}
