import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Movie } from '../models/movie';
import { Reviews } from '../models/reviews';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiUrl = environment.apiURL;
  private apiKey = environment.apiKey;
  private accessToken = environment.token;

  constructor(private http: HttpClient) { }

  // private getHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.accessToken}`
  //   });
  // }

  private getHeaders(): HttpHeaders {
  let headersConfig = {
    'Content-Type': 'application/json'
  };

  if (this.accessToken) {
    headersConfig['Authorization'] = `Bearer ${this.accessToken}`;
  } else {
    headersConfig['Authorization'] = `Apikey ${this.apiKey}`;
  }

  return new HttpHeaders(headersConfig);
}


  fetchData<T>(url: string, params?: any): Observable<any> {
    return this.http.get<any>(url, { headers: this.getHeaders(), params })
      .pipe(
        map(response => response),
        catchError(this.handleError),
      );
  }

  private handleError<T>(error: any): Observable<T> {
    console.error('An error occurred:', error);
    return of<T>([] as T);
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/now_playing`;    
    return this.fetchData<Movie[]>(url)
    .pipe(
    map(response => {
      return response.results;
    }),
    catchError(this.handleError),
    );;
  }

  getupcomingMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/upcoming`;    
    return this.fetchData<Movie[]>(url)
    .pipe(
    map(response => {
      return response.results;
    }),
    catchError(this.handleError),
    );;
  }

  getTopRatedMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/top_rated`;    
    return this.fetchData<Movie[]>(url)
    .pipe(
    map(response => {
      return response.results;
    }),
    catchError(this.handleError),
    );
  }

  getPopularMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/popular`;    
    return this.fetchData<Movie[]>(url)
    .pipe(
    map(response => {
      return response.results;
    }),
    catchError(this.handleError),
    );;
  }

  getMovieDetails(movie_id): Observable<Movie> {
    const url = `${this.apiUrl}/movie/${movie_id}`;        
    return this.fetchData<Movie>(url)
    .pipe(
    map(response => {
      // console.log(response);
      return response;
    }),
    catchError(this.handleError),
    );;
  }

  getMovieReviews(movie_id): Observable<Reviews> {
    const url = `${this.apiUrl}/movie/${movie_id}/reviews`
    return this.fetchData<Reviews>(url)
    .pipe(
      map(response => {
        // console.log(response);
        return response.results;
      }),
      catchError(this.handleError),
    )
  }

  getMoviePosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
}
