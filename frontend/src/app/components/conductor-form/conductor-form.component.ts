import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConductorService } from '../../services/conductor.service';

@Component({
  selector: 'app-conductor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './conductor-form.component.html',
})
export class ConductorFormComponent implements OnInit {
  conductorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private conductorService: ConductorService
  ) {
    this.conductorForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern(/^\d{6,10}$/)]],
      primer_nombre: ['', Validators.required],
      segundo_nombre: [''],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{7,10}$/)]],
      ciudad: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Formulario enviado:', this.conductorForm.value); // Verifica lo que estás enviando al backend
    if (this.conductorForm.invalid) {
      console.warn('Formulario inválido:', this.conductorForm.errors);
      this.conductorForm.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }
  
    this.conductorService.crearConductor(this.conductorForm.value).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        Swal.fire({
          icon: 'success',
          title: 'Conductor registrado',
          text: 'Los datos se guardaron correctamente',
        });
        this.conductorForm.reset();
      },
      error: (error) => {
        console.error('Error al registrar conductor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'No se pudo registrar el conductor. Intente nuevamente.',
        });
      }
    });
  }
  
  

  // Getters para facilitar validaciones
  get cedula() { return this.conductorForm.get('cedula'); }
  get primer_nombre() { return this.conductorForm.get('primer_nombre'); }
  get segundo_nombre() { return this.conductorForm.get('segundo_nombre'); }
  get apellidos() { return this.conductorForm.get('apellidos'); }
  get direccion() { return this.conductorForm.get('direccion'); }
  get telefono() { return this.conductorForm.get('telefono'); }
  get ciudad() { return this.conductorForm.get('ciudad'); }
}
