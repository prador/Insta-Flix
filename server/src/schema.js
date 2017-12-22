import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Rating { 
    id : ID, 
    provider : String, 
    score : Float 
  }

  type Movie { 
    id : ID, 
    name : String, 
    runtime : Int, 
    description : String, 
    genre: [String], 
    rating: [Rating], 
    language: String, 
    certificate: String, 
    director: [String], 
    cast : [String] 
  }

  type ShowDetail { 
    id : ID, 
    screenID : ID,
    movie: Movie, 
    timeOfMovieStart : Int 
  }

  type Screen { 
    id : ID, 
    theatre : Theatre,
    screenNumber : Int, 
    showDetails: [ShowDetail] 
  }

  type Theatre { 
    id : ID, 
    name : String, 
    latitude : Float,
    longitude : Float
    screen : [Screen] 
  }

  type Query {
    getRating : Rating,
    getMovies : [Movie],
    getTheatres : [Theatre]
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
