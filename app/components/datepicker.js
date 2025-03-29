// components/DatePicker.js
"use client";
import React, { useState } from 'react';
//import ReactDatePicker from 'react-datepicker'
//import('react-datepicker/dist/react-datepicker.css')

const DatePicker = () => {
  const [date, setDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleDateChange = (date) => {
    // détection de l'origine de la valeur
    if('currentTarget' in date) // natif
      setDate(date.currentTarget.value);
    else // react-datepicker
      setDate(date)
  };

  return (
    <div>
      <label htmlFor="date">Choisissez une date :</label>
      <input
        type="date"
        id="date"
        onFocus={handleFocus}
        onChange={handleDateChange}
      />
      {/*isFocused && (
        <ReactDatePicker
          selected={date}
          onChange={handleDateChange}
        />
      )*/}
      <p>Date sélectionnée : {date ? date.toString() : 'Aucune date sélectionnée'}</p>
    </div>
  );
};

export default DatePicker;
