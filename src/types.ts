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
  error?: string;
};

export type TInput = {
  name: string;
  type: string;
  label: string;
  value?: string;
  error?: string;
  accept?: string;
  ref?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type TButton = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export type TAnswer = {
  answer: TForm;
};

export type TCurrentPage = {
  [key: string]: string;
};

export type TAddAnswer = {
  answers: TForm[];
  addAnswer: (value: TForm[]) => void;
};

export type TMovies = {
  page: number;
  results: TMoviesResults[];
  total_pages: number;
  total_results: number;
};

export type TDoSearch = {
  searchResults: TMovies | undefined;
  doSearch: (value: TMovies) => void;
};

export type TCardList = {
  searchResults: TMovies | undefined;
};

export type TMoviesResults = {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  genres?: TGenre[];
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
  budget?: number;
  open?: (value: boolean) => void;
};

export type TGenre = {
  id: number;
  name: string;
};

export type TGenres = {
  genres: TGenre[];
};

export type TModal = {
  open: boolean;
  children?: React.ReactNode;
  movie: TMoviesResults;
  onClose: () => void;
};
