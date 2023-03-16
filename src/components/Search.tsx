/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Search extends React.Component<object, { search: string }> {
  constructor(props: object) {
    super(props);
    this.state = { search: localStorage.getItem('search') || '' };
  }

  componentWillUnmount() {
    const { search } = this.state;
    localStorage.setItem('search', search);
  }

  onChange = (e: unknown) => {
    this.setState({ search: ((e as Event).target as HTMLInputElement).value });
  };

  render() {
    const { search } = this.state;
    return (
      <form>
        <input type="text" value={search} placeholder="Search" onChange={this.onChange} />
      </form>
    );
  }
}

export default Search;
