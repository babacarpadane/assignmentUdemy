import React, { useState } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'
import './App.css';

const User = () => {
  const [statoCorrente, gestioneStato] = useState({
    username: "p_babacar",
  });

  const cambiaUsername = () => {
    gestioneStato({
      username: "mr_brassss",
    })
  };

  const inserisciUsername = (event) => {
    gestioneStato({
      username: event.target.value,
    })
  };

  return (
    <div className="contenitore">
      <UserOutput username={statoCorrente.username}>Oggi sono andato a lavoro</UserOutput>
      <UserOutput>Oggi sono andato a scuola</UserOutput>
      <UserOutput>Oggi non ho fatto niente</UserOutput>
      <UserInput username={statoCorrente.username} chiamaMetodo={inserisciUsername}></UserInput>
      <button className="cambiaUsername" onClick={cambiaUsername}>Cambia username</button>
    </div>
  );
};

export default User;
