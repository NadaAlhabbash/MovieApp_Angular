import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-taps',
  templateUrl: './toggle-taps.component.html',
  styleUrl: './toggle-taps.component.css'
})
export class ToggleTapsComponent {

  activeTab: string = 'nowPlaying'; // Initialize the active tab
  nowPlayingPhotos: any[] = [
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    { url: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449' }, // Example URL
    
    // Add more photo objects with URLs as needed
  ];

  constructor() { }

  onNavItemClicked(itemName: string): void {
    console.log('Navigated to:', itemName);
    this.activeTab = itemName; 
    // //Fetch movie photos based on the selected tab
    // if (itemName === 'nowPlaying') {
    //     // Simulate fetching now playing movie photos from a service or API
    //     this.nowPlayingPhotos = [
    //         { url: 'path/to/now-playing-photo-1.jpg' },
    //         { url: 'path/to/now-playing-photo-2.jpg' },
    //         // THE FETCHED PHOTOS
    //     ];
    // }
    // Add conditions to fetch photos for other tabs (upcoming, top rated, popular) if necessary
  }

  }


