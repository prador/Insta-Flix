import { Movies, Theatres, Screens } from './index';

let movies = null;
export default {
  Query: {
    getTheatres: async (root, args) => {
      movies = null;
      if (args.languages && args.languages.length > 0) {
        movies = await Movies.find({ language: { $in: args.languages } });
      } else movies = await Movies.find({});
      const screens = await Screens.find({
        movieID: { $in: movies.map(i => i._id) },
      });
      const theatres = await Theatres.find({
        _id: { $in: screens.map(i => i.theatreID) },
      });

      const modifiedTheatres = theatres.map(theatre => {
        const tempScreens = screens.filter(
          screen => screen.theatreID.toString() === theatre._id.toString()
        );
        const modifiedScreens = [];
        tempScreens.map(screen => {
          screen.timeOfMovieStart.map(time => {
            modifiedScreens.push({
              screenNumber: screen.screenNumber,
              theatreID: screen.theatreID,
              movieID: screen.movieID,
              movieStartTime: time,
            });
          });
        });
        const shows = modifiedScreens.map(screen => {
          return {
            screenNumber: screen.screenNumber,
            movieID: screen.movieID,
            movieStartTime: screen.movieStartTime,
          };
        });
        return Object.assign({}, theatre.toJSON(), { shows });
      });
      return modifiedTheatres;
    },
  },
  Show: {
    movie: async show => {
      const movie = movies.find(movie => {
        return movie._id.toString() === show.movieID.toString();
      });
      return movie;
    },
  },
};
