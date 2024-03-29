import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/contactsSlice';

export const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const newValue = e.target.value;
    dispatch(setFilter(newValue));
  };

  return (
    <FilterLabel>
      Find contact by name:
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};

