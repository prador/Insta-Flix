import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { movieModel, theatreModel } from './modelFunctions';
import schema from './schema';

const url =
  'mongodb://batman:dragoon7%3F@cluster-demo-shard-00-00-njb1y.mongodb.net:27017,cluster-demo-shard-00-01-njb1y.mongodb.net:27017,cluster-demo-shard-00-02-njb1y.mongodb.net:27017/insta-flix?ssl=true&replicaSet=cluster-demo-shard-0&authSource=admin';
mongoose.connect(url, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('connected to MongoDB!!');
});

const app = express();

const Movies = movieModel(mongoose);
const Theatres = theatreModel(mongoose);

app.use(morgan('dev'));
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { Movies, Theatres } })
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
