import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  submit: {
	display: 'block',
	marginTop: '10px'
  },
});

const Dashboard = () => {
  const [keyword, setKeyword] = useState('');

  const updateField = e => {
	setKeyword(e.target.value);
  };

  const classes = useStyles();

  return (
    <>
	  <div className='search-container'>
		<TextField id='search-card' label='Search by Keyword' variant='outlined' name='keyword' value={keyword} onChange={updateField} />
		<Button className={classes.submit} variant='contained' color='primary'>Submit</Button>
	  </div>
	</>
  )
}

export default Dashboard;
