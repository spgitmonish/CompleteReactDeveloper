import React from 'react';
import './search-box.styles.css'

// NOTE: Destructuring is used on props
export const SearchBox = ({ placeholder, handleChange }) => {
  return(
    <input className='search' type='search' placeholder={ placeholder } onChange={ handleChange }/>
  )
}