import { Component } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  movies: Movie[] = [
    { 
      img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
      title: 'Movie Title',
      rating: 4.5,
      type: 'Action',
      year: 2022,
      duration: '2h 30min'
    },
    { 
      img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
      title: 'Movie Title',
      rating: 4.5,
      type: 'Action',
      year: 2022,
      duration: '2h 30min'
    },
    { 
      img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
      title: 'Movie Title',
      rating: 4.5,
      type: 'Action',
      year: 2022,
      duration: '2h 30min'
    },
    { 
      img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
      title: 'Movie Title',
      rating: 4.5,
      type: 'Action',
      year: 2022,
      duration: '2h 30min'
    },
    
  ];
  
}
