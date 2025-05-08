import { Component, OnInit, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  standalone: true,
  imports: [JsonPipe], // 👈 Solo JsonPipe (no necesitas CommonModule)
  template: `
    @if (apiResponse; as data) {
      <div>
        <h2>Estado de la API:</h2>
        <pre>{{ data | json }}</pre>
      </div>
    } @else {
      <p>Probando conexión con la API...</p>
    }
  `,
})
export class ApiStatusComponent implements OnInit {
  private apiService = inject(ApiService);
  apiResponse: any;

  ngOnInit() {
    this.testApiConnection();
  }

  private testApiConnection() {
    this.apiService.getPing().subscribe({
      next: (res) => this.apiResponse = res,
      error: (err) => this.apiResponse = { error: true, message: err.message }
    });
  }
}