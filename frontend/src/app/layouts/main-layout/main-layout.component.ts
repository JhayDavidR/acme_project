// main-layout.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  public openDropdown: string | null = null; 

  /**
   * Alterna la visibilidad de un menú desplegable.
   */
  toggleDropdown(dropdownId: string): void {
    if (this.openDropdown === dropdownId) {
      this.openDropdown = null;
    } else {
      this.openDropdown = dropdownId;
    }
  }
}