const { Pool } = require('pg');

const { PG_URI } = require('./config/keys');

const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, cb) => {
	return pool.query(text, params, cb);
  }
};
