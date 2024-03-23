import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
    topRated : Movie[] = [];

  constructor( private moviesService: MoviesService ) {}

  ngOnInit(): void {
    this.top5Movies();
  }

    top5Movies() {
    this.moviesService.getTopRatedMovies().subscribe({
      next: (response) => { // Changed 'movies' to 'response'
        this.topRated = response.slice(0, 5); // Access 'results' property of the response
        // console.log(this.topRated);        
      }
    });
  }

}
