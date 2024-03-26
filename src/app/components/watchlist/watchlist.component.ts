import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { WatchlistService } from '../../services/Watchlist/watchlist.service';
import { UtilService } from '../../services/utils/util.service';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent implements OnInit {
  watchlist: Movie[] = [];

  constructor(
    private watchlistService: WatchlistService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    this.watchlist = this.watchlistService.getWatchlist();
    console.log(this.watchlist);
    
  }

  getReleaseYear(releaseDate: string): number {
    return this.utilService.getReleaseYear(releaseDate);
  }

  getImgUrl(release_date: string) {
    return this.utilService.getMoviePosterUrl(release_date);
  }

  // movies: Movie[] = [
  //   { 
  //     img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
  //     title: 'Movie Title',
  //     rating: 4.5,
  //     type: 'Action',
  //     year: 2022,
  //     duration: '2h 30min'
  //   },
  //   { 
  //     img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
  //     title: 'Movie Title',
  //     rating: 4.5,
  //     type: 'Action',
  //     year: 2022,
  //     duration: '2h 30min'
  //   },
  //   { 
  //     img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
  //     title: 'Movie Title',
  //     rating: 4.5,
  //     type: 'Action',
  //     year: 2022,
  //     duration: '2h 30min'
  //   },
  //   { 
  //     img: 'https://assets.mubicdn.net/images/notebook/post_images/31915/images-w1400.jpeg?1607880449',
  //     title: 'Movie Title',
  //     rating: 4.5,
  //     type: 'Action',
  //     year: 2022,
  //     duration: '2h 30min'
  //   },
    
  // ];
  

}
