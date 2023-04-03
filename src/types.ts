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
