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

export type TInput = {
  form: TForm;
  valid: TValid;
  answers: TForm[];
  opacity: number[];
};

export type TSelect = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  label: string;
};

export type TAnswer = {
  answer: TForm;
};

export type TValid = {
  from: boolean;
  to: boolean;
  date: boolean;
  type: boolean;
  reason: boolean;
  message: boolean;
  author: boolean;
  image: boolean;
};
