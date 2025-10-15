import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculoFormComponent } from './components/vehiculo-form/vehiculo-form.component';
import { ConductorFormComponent } from './components/conductor-form/conductor-form.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { VehiculoListComponent } from './components/vehiculo-list/vehiculo-list.component';
import { ConductorListComponent } from './components/conductor-list/conductor-list.component';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { VehiculoInformeComponent } from './components/vehiculo-informe/vehiculo-informe.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'; // Nuevo componente de layout

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // Layout con menú para todas las rutas
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'admin/vehiculo-form', component: VehiculoFormComponent },
      { path: 'admin/conductor-form', component: ConductorFormComponent },
      { path: 'admin/propietario-form', component: PropietarioFormComponent },
      { path: 'admin/vehiculo-list', component: VehiculoListComponent },
      { path: 'admin/conductor-list', component: ConductorListComponent },
      { path: 'admin/propietario-list', component: PropietarioListComponent },
      { path: 'admin/vehiculo-informe', component: VehiculoInformeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección inicial
      { path: '**', redirectTo: 'home' } // Ruta comodín (404)
    ]
  }
];