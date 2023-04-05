export type TMovieList = {
  movie: TMovie;
};

export type TMovie = {
  name: string;
  year: string;
  genre: string;
  rating: number;
  stars: string;
  poster: string;
};

export type TForm = {
  from: string;
  to: string;
  date: string;
  type: string;
  reason: string[];
  message: string;
  author: string;
  image: string;
};

export type TSelect = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  label: string;
};

export type TAnswer = {
  answer: TForm;
};

export type TCurrentPage = {
  [key: string]: string;
};

export type TMovies = {
  page: number;
  results: TMoviesResults[];
  total_pages: number;
  total_results: number;
};

export type TMoviesResults = {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  genre?: string;
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  name?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

export type TGenre = {
  id: number;
  name: string;
};

export type TGenres = {
  genres: TGenre[];
};
