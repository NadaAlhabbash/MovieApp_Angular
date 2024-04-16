import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/Movie/movie.service';
import { Movie } from '@models/movie';
import { UtilService } from '@services/utils/util.service';


@Component({
  selector: 'app-toggle-taps',
  templateUrl: './toggle-taps.component.html',
  styleUrl: './toggle-taps.component.css'
})
export class ToggleTapsComponent implements OnInit {

  nowPlayingMovies: Movie[] = [];
  activeTab: string = 'now_playing'; // Initialize the active tab

  constructor(
    private movieService: MovieService,
    private utilService: UtilService
    ) {}

  ngOnInit(): void {
    this.fetchMovies(this.activeTab);
  }

   onNavItemClicked(itemName: string): void {
    this.activeTab = itemName; 
    this.fetchMovies(itemName);
  }

  fetchMovies(tab: string): void {
    this.movieService.getMovies(tab).subscribe({
      next: (movies) => {
        this.nowPlayingMovies = movies;
      }
    });
  }

  getImgUrl(release_date: string) {
    return this.utilService.getMoviePosterUrl(release_date);
  }

  }


