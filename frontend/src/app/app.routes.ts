import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculoFormComponent } from './components/vehiculo-form/vehiculo-form.component';
import { ConductorFormComponent } from './components/conductor-form/conductor-form.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { VehiculoListComponent } from './components/vehiculo-list/vehiculo-list.component';
import { ConductorListComponent } from './components/conductor-list/conductor-list.component';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { VehiculoInformeComponent } from './components/vehiculo-informe/vehiculo-informe.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'vehiculo-form', component: VehiculoFormComponent },
      { path: 'conductor-form', component: ConductorFormComponent },
      { path: 'propietario-form', component: PropietarioFormComponent },
      { path: 'vehiculo-list', component: VehiculoListComponent },
      { path: 'conductor-list', component: ConductorListComponent },
      { path: 'propietario-list', component: PropietarioListComponent },
      { path: 'vehiculo-informe', component: VehiculoInformeComponent },
      { path: '', redirectTo: 'vehiculo-form', pathMatch: 'full' } // Redirección inicial
    ]
  }
];
