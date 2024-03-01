import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-taps',
  templateUrl: './toggle-taps.component.html',
  styleUrl: './toggle-taps.component.css'
})
export class ToggleTapsComponent {

  constructor() { }

  onNavItemClicked(itemName: string): void {
    console.log('Navigated to:', itemName);
    // Add your navigation logic here
  }

}
