import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '09613b8a670ec7659304fdc524eb645f';
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTYxM2I4YTY3MGVjNzY1OTMwNGZkYzUyNGViNjQ1ZiIsInN1YiI6IjY1ZjA1YmVhMGUyOWEyMDE0ODM3NDQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WY60gmVhFoT8yd8YHuRGatHFNcQ6VCmshwf-ODzfa6M';
  
  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: string): Observable<Movie> {

    const url = `${this.apiUrl}${movieId}?api_key=${this.apiKey}&access_token=${this.accessToken}&append_to_response=credits,videos,images,similar_movies`;
    return this.http.get<Movie>(url);

  }
}
