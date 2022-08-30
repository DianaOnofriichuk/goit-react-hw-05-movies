import './SearchForm.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        <input
          className="search-input"
          type="text"
          placeholder="enter the name of the movie"
          name="saerch"
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
