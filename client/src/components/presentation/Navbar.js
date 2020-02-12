import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { LockOpen, Edit } from '@material-ui/icons';

const Navbar = props => {

  const guestLinks = (
    <>
	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/login'>
			Log In
		  </Link>
		</Typography>
	  </ListItemText>

	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/signup'>
		    Sign Up
		  </Link>
		</Typography>
	  </ListItemText>
	</>
  );

  return (
    <>
	  <AppBar position='static'>
		<Toolbar>
    	  <Typography variant='h1'>
			Deckhand
		  </Typography>
		  
		  <List component='nav'>
			<ListItem component='div'>
			  {guestLinks}
			</ListItem>
		  </List>
		</Toolbar>
	  </AppBar>
	</>
  )
};

export default Navbar;
