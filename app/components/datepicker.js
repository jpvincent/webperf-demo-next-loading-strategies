// components/DatePicker.js
"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// création d'un chunk avec import(), transformation en composant dynamic(), on en profite pour éviter d'exécuter ce truc côté serveur
const ReactDatePicker =
  dynamic(() => import(/* webpackChunkName:"datepicker"*/'react-datepicker'), { ssr: false });

const DatePicker = () => {
  const [date, setDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    // récupération dynamique du CSS livré avec le datepicker
    // avec cette méthode, il y aura ALÉATOIREMENT des bugs d'affichage, il faudrait
    import('react-datepicker/dist/react-datepicker.css');
  };


  const handleDateChange = (date) => {
    // détection de l'origine de la valeur
    if('currentTarget' in date) // natif
      setDate(date.currentTarget.value);
    else // react-datepicker
      setDate(date.toString())
  };

  return (
    <div>
      <label htmlFor="date">Choisissez une date :</label>
      {/* Condition false devant un composant dynamique : il n'est pas chargé ! */}
      {isFocused ? (
        <ReactDatePicker
          selected={date}
          onChange={handleDateChange}
          autoFocus
        />
      ) : <input
            type="date"
            id="date"
            onFocus={handleFocus}
          />
      }
      {/* Mais il faut prévoir l'interface d'attente et l'événement pour le charger */}

      <p>Date sélectionnée : {date ? date : 'Aucune date sélectionnée'}</p>
    </div>
  );
};

export default DatePicker;
