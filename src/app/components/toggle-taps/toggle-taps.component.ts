import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
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
    private moviesService: MoviesService,
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
  this.moviesService.getNowPlayingMovies().subscribe({
    next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }    
  });
}
  
  getUpcomingMovies(): void {
    this.moviesService.getupcomingMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  getTopRatedMovies(): void {
    this.moviesService.getTopRatedMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  getPopularMovies(): void {
    this.moviesService.getPopularMovies().subscribe({
      next: (movies) => {
      this.nowPlayingMovies = movies;
      // console.log(this.nowPlayingMovies);
    }
    });
  }

  }


