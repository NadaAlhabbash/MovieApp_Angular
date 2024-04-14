import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/Movie/movie.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { CastMember } from '../../models/cast';
import { WatchlistService } from '../../services/Watchlist/watchlist.service';
import { UtilService } from '../../services/utils/util.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  solid: boolean = false;
  SelectedMovie: Movie | undefined;
  movieId: number;
  reviews: Review;
  cast: CastMember;
  showReadMoreButton: boolean = false;
  activeTab: string = 'aboutMovie';
  isRatingPage: boolean = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private watchlistService: WatchlistService,
    private utilService: UtilService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id']; // Convert to number
      this.getMovieDetails(this.movieId);

      const isInMemoryWatchlist = this.watchlistService.getWatchlist().some(watchedMovie => watchedMovie.id === this.movieId);
    const localStorageWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const isInLocalStorageWatchlist = localStorageWatchlist.some(watchedMovie => watchedMovie.id === this.movieId);

    // Set the solid property based on whether the movie is in the watchlist
    this.solid = isInMemoryWatchlist || isInLocalStorageWatchlist;
      
    });
  }

  toggleSolid(movie: Movie) {
    const isInWatchlist = this.watchlistService.isInWatchlist(movie);
    this.solid = !this.solid;

    if (!isInWatchlist && this.solid) {
      this.watchlistService.addToWatchlist(movie);
    } else if (isInWatchlist && !this.solid) {
      this.watchlistService.removeFromWatchlist(movie);
    }
  }


  toggleRating() {
    this.isRatingPage = !this.isRatingPage;
    console.log("this is rating page!");
  }

  getMovieDetails(movieId: number) : void {
    this.movieService.getMovieDetails(movieId).subscribe({
      next: (movie) => {
        this.SelectedMovie = movie;
      }
    })
  }

  getMovieReviews(movieId: number) {
    this.movieService.getMovieReviews(movieId).subscribe({
        next: (reviews) => {
            this.reviews = reviews;
            // console.log(this.reviews);
        }
    })
  }

  getMovieCast(movieId: number) {
    this.movieService.getMovieCast(movieId).subscribe({
      next: (cast) =>{
        this.cast = cast;
        console.log(this.cast);
        
      }
    })
  }

  getImgUrl(Image_path: string): string {
  if (Image_path && Image_path.trim() !== '') {
    return this.utilService.getMoviePosterUrl(Image_path);
  } else {
    return 'https://c4.wallpaperflare.com/wallpaper/198/872/888/minimalism-404-not-found-numbers-simple-background-wallpaper-preview.jpg';
  }
}



  onNavItemClicked(itemName: string): void {
    this.activeTab = itemName; 

    if (itemName === 'aboutMovie') {

        this.getMovieDetails(this.movieId);

    }

    else if (itemName === 'reviews') {

        this.getMovieReviews(this.movieId);

    }

    else if (itemName === 'cast') {
      this.getMovieCast(this.movieId);
    }
  }

  getReleaseYear(releaseDate: string): number {
    return this.utilService.getReleaseYear(releaseDate);
  }

}
