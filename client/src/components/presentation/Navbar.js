import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { LockOpen, Edit } from '@material-ui/icons';

const useStyles = makeStyles({
  navbar: {
	display: 'flex',
  },
  title: {
	fontSize: '30px',
	fontFamily: 'BelweBold',
	flex: 1,
	marginLeft: '15px'
  },
  titleText: {
	textDecoration: 'none',
	color: '#fff',
	cursor: 'pointer'
  },
  links: {
	fontSize: '20px',
	color: '#fff',
	textDecoration: 'none'
  }
});


const Navbar = props => {

  const classes = useStyles();

  const guestLinks = (
    <>
	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/login' className={classes.links}>
			Log In
		  </Link>
		</Typography>
	  </ListItemText>

	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/signup' className={classes.links}>
		    Sign Up
		  </Link>
		</Typography>
	  </ListItemText>
	</>
  );

  const userLinks = (
    <>
	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/login' className={classes.links}>
		    Saved Deck
		  </Link>
		</Typography>
	  </ListItemText>

	  <ListItemText inset>
		<Typography variant='subtitle1'>
		  <Link to='/signup' className={classes.links}>
		    Log Out
		  </Link>
		</Typography>
	  </ListItemText>
	</>
  );

  return (
    <>
	  <AppBar position='static' className={classes.navbar}>
		<Toolbar>
    	  <Typography variant='h1' className={classes.title}>
			<Link to='/' className={classes.titleText}>
			  Deckhand
			</Link>
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
