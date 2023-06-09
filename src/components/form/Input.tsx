import { LegacyRef, forwardRef } from 'react';
import { TInput } from 'types';

const className = (type: string) => {
  switch (type) {
    case 'checkbox':
      return ['reason__label', 'reason__span'];
    case 'radio':
      return ['radio__label', 'radio__span'];
    default:
      return ['', ''];
  }
};

export const Input = forwardRef(
  (
    { onChange, name, type, value, label, error, accept }: TInput,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => (
    <label className={className(type)[0]}>
      {label}
      <input name={name} ref={ref} type={type} value={value} accept={accept} onChange={onChange} />
      {type === 'checkbox' || type === 'radio' ? (
        <span className={className(type)[1]} />
      ) : (
        <div className="requirements">{error}</div>
      )}
    </label>
  )
);
