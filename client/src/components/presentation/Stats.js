import React from 'react';

const Stats = props => {
  let numCards = props.deck.length;
  let manaCost = props.deck.reduce ( (acc, curr) => {
	acc += curr.manaCost;
	return acc;
  },0);

  return (
    <>
	  <h1>Number of Cards</h1>
	  <h2>{numCards} / 30</h2>
	  <h1>Mana Cost</h1>
	  <h2>{manaCost}</h2>
	</>
  )
}

export default Stats;
	
