import { Injectable } from '@angular/core';
import { Movie } from '@models/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private readonly storageKey = 'watchlist';
  watchlist: Movie[] = [];

  constructor() {
    const watchlistData = localStorage.getItem(this.storageKey);
    if (watchlistData) {
      this.watchlist = JSON.parse(watchlistData);
    }
   }

  addToWatchlist(movie: Movie) {
    this.watchlist.push(movie);
    localStorage.setItem(this.storageKey, JSON.stringify(this.watchlist));
  }

  getWatchlist() {
    return this.watchlist;
  }

  isInWatchlist(movie: Movie): boolean {
    return this.watchlist.some(item => item.id === movie.id);
}

removeFromWatchlist(movie: Movie) {
    this.watchlist = this.watchlist.filter(item => item.id !== movie.id);
    localStorage.setItem(this.storageKey, JSON.stringify(this.watchlist));
  }
}
