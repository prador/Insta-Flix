import { Movies, Theatres, Screens } from './index';

const rating = {
  id: 1,
  provider: 'Rotten Potatoes',
};

export default {
  Query: {
    getRating: () => rating,
    getMovies: async () => {
      const movies = await Movies.find();
      /*return movies.map(movie => {
        movie.id = movie._id.toString();
        return movie;
      });*/
      return movies;
    },
    getTheatres: async () => {
      return await Theatres.find();
    },
  },
  Theatre: {
    screen: async theatre => {
      return await Screens.find({ theatreID: theatre._id.toString() });
    },
  },
  Screen: {
    theatre: async screen => {
      return await Theatres.findOne({ _id: screen.theatreID });
    },
  },
};
