import { Component, OnInit } from '@angular/core';
import { Movie, Genre } from '../../models/movie';
import { MovieService } from '../../services/Movie/movie.service';
import { UtilService } from '../../services/utils/util.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  query: string = '';
  searchResults: Movie[] = [];
  isLoading: boolean = false;
  genres: Genre[] = [];

  constructor(
    private movieService: MovieService,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.fetchGenres();
  }

  fetchGenres(): void {
  this.movieService.fetchGenres().subscribe({
    next: (data: Genre[]) => {
      console.log(data);
      // Assuming this.genres is an array to store genre objects
      if (Array.isArray(data)) { // Check if data is an array
        this.genres = data;
      } else {
        console.error('Genres data is not an array');
      }
    },
    error: (error) => {
      console.error('Error fetching genres:', error);
    }
  });
}

  search(): void {
    if (this.query.trim() !== '') {
      this.isLoading = true;
      this.movieService.searchMovies(this.query).subscribe({
        next: (movies: Movie[]) => {
          this.searchResults = movies;
          this.isLoading = false;
          this.searchResults.forEach(movie => {
          this.movieService.getMovieDuration(movie.id).subscribe(duration => {
            movie.runtime = duration;
          });
        });
        },
        error: (error) => {
          console.error('Error searching movies:', error);
          this.isLoading = false;
        }
      });
    } else {
      // Handle empty query
      this.clearSearch();
    }
  }

  // Function to clear search results
  clearSearch(): void {
    this.query = '';
    this.searchResults = [];
  }
  
  getImgUrl(Image_path: string): string {
  if (Image_path && Image_path.trim() !== '') {
    return this.utilService.getMoviePosterUrl(Image_path);
  } else {
    return 'https://c4.wallpaperflare.com/wallpaper/198/872/888/minimalism-404-not-found-numbers-simple-background-wallpaper-preview.jpg';
  }
}


  getReleaseYear(releaseDate: string): number {
    return this.utilService.getReleaseYear(releaseDate);
  }

  getGenreName(genreIds: number[]): string | undefined {
  const genreMap: { [id: number]: string } = {};
  this.genres.forEach(genre => {
    genreMap[genre.id] = genre.name;
  });

  for (let id of genreIds) {
    const genreName = genreMap[id];
    if (genreName) {
      return genreName; // Return the first matched genre name
    }
  }

  return undefined; // Return undefined if no genre name is found
}




}
