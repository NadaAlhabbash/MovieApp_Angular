import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

   activeIcon: string = 'home'; // Initialize active icon

  constructor() {}

  onIconClicked(icon: string): void {
    this.activeIcon = icon; // Set the clicked icon as active
    console.log(this.activeIcon);
    
  }

}
