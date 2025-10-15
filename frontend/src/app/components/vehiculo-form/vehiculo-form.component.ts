import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { ConductorService } from '../../services/conductor.service';
import { PropietarioService } from '../../services/propietario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vehiculo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehiculo-form.component.html',
})
export class VehiculoFormComponent implements OnInit {
  vehiculoForm: FormGroup;
  conductores: any[] = [];
  propietarios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private conductorService: ConductorService,
    private propietarioService: PropietarioService
  ) {
    this.vehiculoForm = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}\d{3}$/)]],
      color: ['', Validators.required],
      marca: ['', Validators.required],
      tipo_vehiculo: ['particular', Validators.required],
      conductor_id: ['', Validators.required],
      propietario_id: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadConductores();
    this.loadPropietarios();
    this.vehiculoForm = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}[0-9]{3}$/)]],
      color: ['', Validators.required],
      marca: ['', Validators.required],
      tipo_vehiculo: ['', Validators.required],
      conductor_id: ['', Validators.required],
      propietario_id: ['', Validators.required],
    });
    
  }
  loadConductores() {
    this.conductorService.getConductores().subscribe({
      next: (data) => {
        // console.log('Datos COMPLETOS de conductores:', JSON.parse(JSON.stringify(data)));
        this.conductores = Array.isArray(data) ? data : [];
      },
      // ...
    });
  }
  loadPropietarios() {
    this.propietarioService.getPropietarios().subscribe({
      next: (data) => {
        this.propietarios = data;
        // console.log('Propietarios recibidos:', data); // <-- Añade esto
      },
      error: (error) => console.error('Error cargando propietarios:', error)
    });
  }
  onSubmit() {
    if (this.vehiculoForm.invalid) {
      this.vehiculoForm.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor, revise los campos obligatorios',
      });
      return;
    }
  
    const formData = this.vehiculoForm.value;
  
    // Llamada real al backend
    this.vehiculoService.createVehiculo(formData).subscribe({
      next: (response) => {
        console.log('Vehículo registrado:', response);
        Swal.fire({
          icon: 'success',
          title: 'Vehículo registrado',
          text: 'Los datos se guardaron correctamente',
        });
        this.vehiculoForm.reset();
      },
      error: (error) => {
        console.error('Error al registrar vehículo:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo registrar el vehículo. El vehiculo ya se encuentra registrado',
        });
      }
    });
  }
  
  get placa() { return this.vehiculoForm.get('placa'); }
  get color() { return this.vehiculoForm.get('color'); }
  get marca() { return this.vehiculoForm.get('marca'); }
  get tipo_vehiculo() { return this.vehiculoForm.get('tipo_vehiculo'); }
  get conductor_id() { return this.vehiculoForm.get('conductor_id'); }
  get propietario_id() { return this.vehiculoForm.get('propietario_id'); }

  
}