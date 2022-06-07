import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {userState} from '../states/userState';
const axios = require('axios').default;

export default function Contributor() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const onChangeLastname = (event) => {
      setLastname(event.target.value)
    }
    const onChangeFirstname = (event) => {
      setFirstname(event.target.value)
    }
    const onChangeAge = (event) => {
      setAge(event.target.value)
    }
    const handleSubmit = (event) =>
    {
        axios({
            method: 'post',
            url: 'http://localhost:3000/contributors/',
            data: {
                firstname: firstname,
                lastname: lastname,
                age: age
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
            Nom :
            <input type="text" value={firstname} onChange={onChangeFirstname} />
          </label>
          <label>
            prenom :
            <input type="text" value={lastname} onChange={onChangeLastname} />
          </label>
          <label>
            age :
            <input type="text" value={age} onChange={onChangeAge} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      )
    }
  }