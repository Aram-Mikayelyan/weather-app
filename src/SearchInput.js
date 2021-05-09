import React, { useState } from 'react';
import {Input, FormControl, Button, InputLabel } from '@material-ui/core';
import './inputForm.scss';



export default function SearchInput({ onSearch }) {

  const [text, setText] = useState("");

  return (
    <div className="input-form">
      <div className='inner-form-div'>
        <h1>Search your city weather</h1>
        <form  onSubmit={e => {
          e.preventDefault();
          onSearch(text);
          setText("");
        }}>
        <FormControl>
          <InputLabel htmlFor="my-input">search</InputLabel>
          <Input value={text} onChange={e=> {
              setText(e.target.value);
          }} id="my-input" aria-describedby="my-helper-text" />
          <Button onClick={e => {
          e.preventDefault();
          onSearch(text);
          setText("");
        }} type='submit' variant="contained" color='primary'>get weather</Button>
        </FormControl>
        </form>
      </div>
    </div>
  )
};