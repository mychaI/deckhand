import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Deck = props => {

  const handleDelete = e => {
	props.removeFromDeck(e.target);
  };

  const cards = props.deck.map( (card, i) => (
    <li key={i} data-id={card.id} className='card-bar'>
	  <span>
	    <h3 className='cardName'>{card.name}</h3>
		<img src={card.cropImage} alt={card.name} />
		<HighlightOffIcon className='remove' id={i} onClick={ handleDelete } />
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
