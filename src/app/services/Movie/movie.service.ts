import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Movie } from '../../models/movie';
import { Review } from '../../models/review';
import { CastMember } from '../../models/cast';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

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

  getMovieReviews(movie_id): Observable<Review> {
    const url = `${this.apiUrl}/movie/${movie_id}/reviews`
    return this.fetchData<Review>(url)
    .pipe(
      map(response => {
        // console.log(response);
        return response.results;
      }),
      catchError(this.handleError),
    )
  }

  getMovieCast(movie_id): Observable<CastMember> {
    const url= `${this.apiUrl}/movie/${movie_id}/credits`
    return this.fetchData<CastMember>(url)
    .pipe(
      map(response => {
        // console.log(response);
        return response.cast;
      }),
      catchError(this.handleError),
    )
  }

  searchMovies(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/search/movie`;
    const params = { query };
    return this.fetchData<Movie[]>(url, params)
      .pipe(
        map(response => response.results),
        catchError(this.handleError),
      );
  }
}

