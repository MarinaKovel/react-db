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

export type TAnswers = {
  answers: TForm[];
};

export type TAnswer = {
  answer: TForm;
};

export type TCurrentPage = {
  [key: string]: string;
};

export type TCard = {
  id: number;
};

export type TModal = {
  open: boolean;
  children?: React.ReactNode;
  card: TCharacter;
  onClose: () => void;
};

export type TCharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: TCharacter[];
};

export type TCharacter = {
  id: number;
  name: string;
  status?: string;
  species: string;
  type?: string;
  gender: string;
  origin: { name: string };
  location?: { name: string };
  image: string;
  episode?: string[];
};
