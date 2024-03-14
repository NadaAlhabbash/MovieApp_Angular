// export interface Movie {
//   img: string;
//   title: string;
//   rating: number;
//   type: string;
//   year: number;
//   duration: string;
// }
export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  credits: Credits;
  videos: Video[];
  images: Images;
  similar_movies: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  profile_path: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
}

export interface Images {
  posters: Image[];
  backdrops: Image[];
}

export interface Image {
  file_path: string;
}
