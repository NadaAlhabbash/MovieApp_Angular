import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  solid: boolean = false;
  content: string = `From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.`;
  contentToShow: string;
  showReadMoreButton: boolean = false;
  activeTab: string = 'aboutMovie';
  showFullText: boolean = false;
  review: string = `From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government.`
  cast = [
    { name: 'Actor 1', photoUrl: '../../../assets/images/Ellipse 1 (1).png' },
    { name: 'Actor 2', photoUrl: '../../../assets/images/Ellipse 1 (1).png' },
    { name: 'Actor 3', photoUrl: '../../../assets/images/Ellipse 1 (1).png' }
    // Add more cast members as needed
  ];
  isRatingPage: boolean = false;

  constructor() {
    // Initially, show the first 200 characters of the content
    this.contentToShow = this.content.slice(0, 200);

    // If the content length exceeds 200 characters, show the "Read More" button
    if (this.content.length > 200) {
      this.showReadMoreButton = true;
    }
  }


  toggleSolid() {
    this.solid = !this.solid;
  }

  toggleContent() {
    this.showFullText = !this.showFullText;
    // Toggle between showing the truncated content and the full content
    if (this.contentToShow.length === 200) {
      this.contentToShow = this.content;
    } else {
      this.contentToShow = this.content.slice(0, 200);
    }
  }

  onNavItemClicked(itemName: string): void {
    console.log('Navigated to:', itemName);
    this.activeTab = itemName; 
  }

  toggleRating() {
    this.isRatingPage = !this.isRatingPage;
    console.log("this is rating page!");
    
  }

  updateSliderBackground(event: Event) {
    const slider: any = event.target as HTMLInputElement;
    const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background =
      `linear-gradient(
        to right, #FF8700 0%, #FF8700 ${percentage}%, #D9DBE9 ${percentage}%, #D9DBE9 100%)`;
  }

}
