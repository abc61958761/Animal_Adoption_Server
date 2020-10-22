// import knexJs from 'knex';
// import bookshelf from 'bookshelf';

// import knexConfig from './knexfile';

// /**
//  * Database connection.
//  */
// const knex = knexJs(knexConfig);
// const db = bookshelf(knex);

// export default db;

import mongoose from 'mongoose';

mongoose.connect('mongodb://root:test@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;
