import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/Movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  query: string = '';
  searchResults: Movie[] = [];
  isLoading: boolean = false;

  constructor(private movieService: MovieService) { }

  search(): void {
    if (this.query.trim() !== '') {
      this.isLoading = true;
      this.movieService.searchMovies(this.query).subscribe(
        (movies: Movie[]) => {
          this.searchResults = movies;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error searching movies:', error);
          this.isLoading = false;
        }
      );
    } else {
      // Handle empty query
      this.searchResults = [];
    }
  }

  // Function to clear search results
  clearSearch(): void {
    this.query = '';
    this.searchResults = [];
  }
  
}
