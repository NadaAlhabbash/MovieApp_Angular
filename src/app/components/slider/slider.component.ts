import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  sliderPhotos: any[] = []

  constructor( private moviesService: MoviesService ) {}

  ngOnInit() {
    // Call the API to fetch movie details
    this.moviesService.getMovieDetails('157336').subscribe(
      (movie) => {
        // Extract image URLs from the fetched movie data
        this.sliderPhotos = movie.images.posters.map((poster) => {
          return { url: `https://image.tmdb.org/t/p/original${poster.file_path}` };
        });
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

}
