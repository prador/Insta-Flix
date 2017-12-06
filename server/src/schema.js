import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Location{ 
    id : ID, 
    lat : Float, 
    long : Float 
  }
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
    director: String, 
    cast : [String] 
  }

  type ShowDetail { 
    id : ID, 
    movie: Movie, 
    timeOfMovieStart : Int 
  }

  type Screen { 
    id : ID, 
    auditoriumNumber : Int, 
    showDetails: [ShowDetail] 
  }

  type Theater { 
    id : ID, 
    name : String, 
    location : Location, 
    screen : [Screen] 
  }

  type Query {
    getRating : Rating
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
