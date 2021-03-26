/* eslint-disable */
import React from 'react';

const SuperHeroes = ({ superheroes }) => {
    const fastHeroes = superheroes.filter((element) => element.powerstats.speed > 85);
    return (
      <DisplayListHeroes fastHeroes={fastHeroes} />
    );
  };

const DisplayListHeroes = ({ fastHeroes }) => {
  console.log(fastHeroes);
  const definitionsHeroes = fastHeroes.map((element) => (
    <div>
      <div className="container">
        <h2>{element.name}</h2>
        <p className="bio">
          {'Alignment : '}
          {element.biography.alignment}
        </p>
        <p className="bio">
          {'Gender : '}
          {element.appearance.gender}
        </p>
        <h3>Stats : </h3>
        <ul>
          <li>
            {'Strength : '}
            {element.powerstats.strength}
          </li>
          <li>
            {'Power : '}
            {element.powerstats.power}
          </li>
          <li>
            {'Intelligence : '}
            {element.powerstats.intelligence}
          </li>
          <li>
            {'Speed : '}
            {element.powerstats.speed}
          </li>
          <li>
            {'Combat : '}
            {element.powerstats.combat}
          </li>
        </ul>
      </div>
    </div>
  ));
  return (
    <div>{definitionsHeroes}</div>
  );
};

export default SuperHeroes;
/* eslint-disable */