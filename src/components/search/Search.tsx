import { useState, useRef, useEffect, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchValueSlice } from '../../app/store/reducers/SearchValueSlice';

export function Search() {
  const { search } = useAppSelector((state) => state.searchReducer);
  const { setSearchValues } = searchValueSlice.actions;
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(search);
  const inputRef = useRef(inputValue);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(setSearchValues(inputRef.current));
  }

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={inputValue}
        ref={() => inputValue}
        placeholder="Search"
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
}
