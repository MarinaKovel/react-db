import { LegacyRef, forwardRef } from 'react';
import { TButton } from '@types';

export const Button = forwardRef(
  ({ onClick, name, className }: TButton, ref: LegacyRef<HTMLButtonElement> | undefined) => (
    <button
      type="submit"
      aria-label="Submit"
      name={name}
      className={className}
      ref={ref}
      onClick={onClick}
    >
      {name}
    </button>
  )
);
