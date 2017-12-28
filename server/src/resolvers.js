import { Movies, Theatres, Screens, ShowDetails } from './index';

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
    getScreens: async () => {
      return await Screens.find();
    },
    getShowDetails: async () => {
      return await ShowDetails.find();
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
    showDetails: async screen => {
      return await ShowDetails.find({ screenID: screen._id });
    },
  },
  ShowDetail: {
    movie: async showDetail => {
      return await Movies.findOne({ _id: showDetail.movieID });
    },
    screen: async showDetail => {
      return await Screens.findOne({ _id: showDetail.screenID });
    },
  },
};
