/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './ex4.css';
import SuperHeroes from './superHeroes';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <div>
      <h1>The fast Heroes</h1>
      <SuperHeroes superheroes={superheroes} />
    </div>);
};
/* eslint-disable */