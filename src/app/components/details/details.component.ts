import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review';
import { CastMember } from '../../models/cast';


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
  // content: string = `From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.`;
  // contentToShow: string;
  showReadMoreButton: boolean = false;
  activeTab: string = 'aboutMovie';
  // showFullText: boolean = false;
  // cast = [
    // { name: 'Actor 1', photoUrl: '../../../assets/images/Ellipse 1 (1).png' },
    // { name: 'Actor 2', photoUrl: '../../../assets/images/Ellipse 1 (1).png' },
    // { name: 'Actor 3', photoUrl: '../../../assets/images/Ellipse 1 (1).png' }
    // Add more cast members as needed
  // ];
  isRatingPage: boolean = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) {
    // this.movieId = this.SelectedMovie.id;
    // Initially, show the first 200 characters of the content
    // this.contentToShow = this.content.slice(0, 200);

    // If the content length exceeds 200 characters, show the "Read More" button
    // if (this.content.length > 200) {
    //   this.showReadMoreButton = true;
    // }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id']; // Convert to number
      this.getMovieDetails(this.movieId);
    });
  }

  toggleSolid() {
    this.solid = !this.solid;
  }


//   getMovieDetails(movieId: number) {
//   this.moviesService.getMovieDetails(movieId).subscribe({
//     next: (movie) => {      
//       this.SelectedMovie = movie;
//       console.log(this.SelectedMovie);
//     },
//   });
// }

  // toggleContent() {
  //   this.showFullText = !this.showFullText;
  //   // Toggle between showing the truncated content and the full content
  //   if (this.contentToShow.length === 200) {
  //     this.contentToShow = this.content;
  //   } else {
  //     this.contentToShow = this.content.slice(0, 200);
  //   }
  // }

  toggleRating() {
    this.isRatingPage = !this.isRatingPage;
    console.log("this is rating page!");
  }

  getMovieDetails(movieId: number) : void {
    this.movieService.getMovieDetails(movieId).subscribe({
      next: (movie) => {
        this.SelectedMovie = movie;
        // console.log(this.SelectedMovie);
        const year = this.getReleaseYear(movie.release_date);
        // console.log('Release year:', year);
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

  onNavItemClicked(itemName: string): void {
    // console.log('Navigated to:', itemName);
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
    const date = new Date(releaseDate);
    return date.getFullYear();
  }

}
