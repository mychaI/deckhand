import React from 'react';

const Deck = props => {

  const cards = props.deck.map( (card, i) => (
    <li key={i} data-id={card.id} className='card-bar'>
	  <span>
		<img src={card.cropImage} />
	  </span>
	</li>
  ));

  return (
    <>
	  {cards}
	</>
  )
}

export default Deck;
