import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PropietarioService } from '../../services/propietario.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-propietario-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './propietario-form.component.html',
})
export class PropietarioFormComponent {
  propietarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propietarioService: PropietarioService
  ) {
    this.propietarioForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern(/^\d{6,10}$/)]],
      primer_nombre: ['', Validators.required],
      segundo_nombre: [''],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{7,10}$/)]],
      ciudad: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.propietarioForm.invalid) {
      this.propietarioForm.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    this.propietarioService.crearPropietario(this.propietarioForm.value).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Propietario registrado',
          text: 'Los datos se guardaron correctamente',
        });
        this.propietarioForm.reset();
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'No se pudo registrar el propietario. Intente nuevamente.',
        });
      },
    });
  }

  // Getters
  get cedula() { return this.propietarioForm.get('cedula'); }
  get primer_nombre() { return this.propietarioForm.get('primer_nombre'); }
  get segundo_nombre() { return this.propietarioForm.get('segundo_nombre'); }
  get apellidos() { return this.propietarioForm.get('apellidos'); }
  get direccion() { return this.propietarioForm.get('direccion'); }
  get telefono() { return this.propietarioForm.get('telefono'); }
  get ciudad() { return this.propietarioForm.get('ciudad'); }
}
