import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {userState} from '../states/userState';
const axios = require('axios').default;

export default Event = () => {
    const [place, setPlace] = useState('');
    const [title, setTitle] = useState('');
    const onChangePlace = (event) => {
      setPlace(event.target.value)
    }
    const onChangeTitle = (event) => {
      setTitle(event.target.value)
    }
    const handleSubmit = (event) =>
    {
        axios({
            method: 'post',
            url: 'http://localhost:3000/events/',
            data: {
                place: place,
                title: title
            }
          })
        .then(response => {
        console.log(response);
        return;
      })
      event.preventDefault();
    }
    {
      return (
          <form onSubmit={handleSubmit}>
          <label>
            donner un nom à l'evenement:
            <input type="text" name="place" value={title} onChange={onChangeTitle} />
          </label>
          <label>
            donner une addresse:
            <input type="text" name="place" value={place} onChange={onChangePlace} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      )
    }
  }