import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-toggle-taps',
  templateUrl: './toggle-taps.component.html',
  styleUrl: './toggle-taps.component.css'
})
export class ToggleTapsComponent implements OnInit {

  nowPlayingMovies: Movie[] = [];
  activeTab: string = 'nowPlaying'; // Initialize the active tab

  constructor(
    private movieService: MovieService,
    ) {}

  ngOnInit(): void {
    this.getNowPlayingMovies();
  }

   onNavItemClicked(itemName: string): void {
    this.activeTab = itemName; 
    // //Fetch movie photos based on the selected tab
    if (itemName === 'nowPlaying') {

      this.getNowPlayingMovies();
    }

    else if (itemName == 'upcoming') {

      this.getUpcomingMovies();
    }

    else if (itemName == 'topRated') {

      this.getTopRatedMovies();
    }

    else if (itemName == 'popular') {
      this.getPopularMovies();
    }
  }

  getNowPlayingMovies(): void {
  this.movieService.getNowPlayingMovies().subscribe({
    next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }    
  });
}
  
  getUpcomingMovies(): void {
    this.movieService.getupcomingMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  getTopRatedMovies(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  }


