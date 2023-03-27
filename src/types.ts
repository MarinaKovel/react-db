export type TForm = {
  from: string;
  to: string;
  date: string;
  type: string;
  isCool: string;
  isFriend: string;
  doLike: string;
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
