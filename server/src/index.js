import http from 'http';
import express from 'express';
import cors from 'cors';
import authFile from './firebase-auth';
import admin from 'firebase-admin';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';
admin.initializeApp({
  credential: admin.credential.cert(authFile),
  databaseURL: 'https://insta-flix.firebaseio.com/',
});
const db = admin.database();
const app = express();

//logger
app.use(morgan('dev'));
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { db } })
);
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`);
});

export default app;
