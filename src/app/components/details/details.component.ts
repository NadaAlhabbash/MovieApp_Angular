import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  solid: boolean = false;

  toggleSolid() {
    this.solid = !this.solid;
  }

}
