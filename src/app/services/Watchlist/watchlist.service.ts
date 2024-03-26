import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  watchlist: Movie[] = [];

  constructor() { }

  addToWatchlist(movie: Movie) {
    this.watchlist.push(movie);
  }

  getWatchlist() {
    return this.watchlist;
  }
}
