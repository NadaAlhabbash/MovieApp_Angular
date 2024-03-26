import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }

  getReleaseYear(releaseDate: string): number {
    const date = new Date(releaseDate);
    return date.getFullYear();
  }
  
}
