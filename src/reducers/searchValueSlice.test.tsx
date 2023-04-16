import searchReducer from './SearchValueSlice';

describe('searchSlice', () => {
  it('should return default state', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result).toEqual({ search: '' });
  });
  it('should change value', () => {
    const action = { type: 'search/setSearchValues', payload: 'einstein' };
    const result = searchReducer({ search: '' }, action);
    expect(result.search).toBe('einstein');
  });
});
