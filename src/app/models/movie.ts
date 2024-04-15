export interface Movie {
  backdrop_path?: string;
  genres?: Genre[];
  id: number;
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  runtime?: number;
  title?: string;
  vote_average?: number;
}

export interface Genre {
  id: number;
  name: string;
}
