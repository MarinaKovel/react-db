import { forwardRef } from 'react';
import { TSelect } from 'types';

const Select = forwardRef(
  ({ onChange, name, label }: TSelect, ref: React.LegacyRef<HTMLSelectElement> | undefined) => (
    <label>
      {label}
      <select name={name} ref={ref} onChange={onChange} className="form__select">
        <option value="">--Please choose an option--</option>
        <option value="hi">Hi</option>
        <option value="thank you">Thank you</option>
        <option value="sorry">Sorry</option>
      </select>
    </label>
  )
);

export default Select;
