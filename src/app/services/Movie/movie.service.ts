import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Movie, Genre } from '@models/movie';
import { Review } from '@models/review';
import { CastMember } from '@models/cast';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private apiUrl = environment.apiURL;
  private apiKey = environment.apiKey;
  private accessToken = environment.token;

  constructor(private http: HttpClient) { }

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

  getMovies(type: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/${type}`;
    return this.fetchData<Movie[]>(url)
      .pipe(
        map(response => response.results),
        catchError(this.handleError),
      );
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
        map(response => {
          console.log(response.results);
          return response.results;
        }),
        catchError(this.handleError),
      );
  }

  fetchGenres(): Observable<Genre[]> {
    const url = `${this.apiUrl}/genre/movie/list`;
    return this.fetchData<Genre[]>(url)
    .pipe(
      map(response => {
        console.log(response);
        return response.genres;        
      }),
      catchError(this.handleError),
    )
  }

  getMovieDuration(movieId: number): Observable<number> {
    return this.fetchData(`${this.apiUrl}movie/${movieId}`)
      .pipe(
        map((data: any) => {
          return data.runtime;
        })
      );
  }

  // getGenres(): Observable<any> {
  //   const url = `${this.apiUrl}/genre/movie/list`;
  //   const params = { api_key: this.apiKey };
  //   return this.http.get<any>(url, { params }).pipe(
  //     catchError(this.handleError)
  //   );
  // }
}

