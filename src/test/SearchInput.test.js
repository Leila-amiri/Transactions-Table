import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../components/SearchInput/SearchInput';

describe('SearchInput', () => {
  it('updates on input change', () => {
    const handleChange = jest.fn(event => event.target.value);

    render(<SearchInput searchTerm="test" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'new search' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.results[0].value).toBe('new search');
  });
});