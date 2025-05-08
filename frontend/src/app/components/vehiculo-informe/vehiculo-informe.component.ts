import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo.model';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-vehiculo-informe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculo-informe.component.html',
})
export class VehiculoInformeComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  isLoading = true;

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
      }
    });
  }

  exportarExcel(): void {
    const data = this.vehiculos.map(v => ({
      Placa: v.placa,
      Marca: v.marca,
      'Conductor Nombre': `${v.conductor.primer_nombre} ${v.conductor.segundo_nombre ?? ''} ${v.conductor.apellidos}`,
      'Propietario Nombre': `${v.propietario.primer_nombre} ${v.propietario.segundo_nombre ?? ''} ${v.propietario.apellidos}`
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'Informe': worksheet }, SheetNames: ['Informe'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'informe_vehiculos.xlsx');
  }
}
