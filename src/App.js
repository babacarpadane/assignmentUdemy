import React, { useState } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'
import './App.css';

const User = () => {
  const [getStatoCorrente, setStatoCorrente] = useState({
    username: "p_babacar",
  });

  const changeUsername = () => {
    setStatoCorrente({
      username: "mr_brassss",
    })
  };

  const insertUsername = (event) => {
    setStatoCorrente({
      username: event.target.value,
    })
  };

  return (
    <div className="contenitore">
      <UserOutput username={getStatoCorrente.username}>Oggi sono andato a lavoro</UserOutput>
      <UserOutput>Oggi sono andato a scuola</UserOutput>
      <UserOutput>Oggi non ho fatto niente</UserOutput>
      <UserInput username={getStatoCorrente.username} chiamaMetodo={insertUsername}></UserInput>
      <button className="changeUsername" onClick={changeUsername}>Cambia username</button>
    </div>
  );
};

export default User;
