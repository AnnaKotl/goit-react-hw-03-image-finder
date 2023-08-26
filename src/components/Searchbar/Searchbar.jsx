import React, { useState } from 'react';
import {
  SearchBarWrapper,
  Form,
  Button,
  Input
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <SearchBarWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images or «lama»"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </SearchBarWrapper>
  );
};
