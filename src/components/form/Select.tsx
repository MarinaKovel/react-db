import { LegacyRef, forwardRef } from 'react';
import { TSelect } from 'types';

export const Select = forwardRef(
  ({ onChange, name, label, error }: TSelect, ref: LegacyRef<HTMLSelectElement> | undefined) => (
    <>
      <label>
        {label}
        <select name={name} ref={ref} onChange={onChange} className="form__select">
          <option value="">--Please choose an option--</option>
          <option value="hi">Hi</option>
          <option value="thank you">Thank you</option>
          <option value="sorry">Sorry</option>
        </select>
      </label>
      <div className="requirements">{error}</div>
    </>
  )
);
