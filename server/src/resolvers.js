const rating = {
  id: 1,
  provider: 'Rotten Potatoes',
};

export default {
  Query: {
    getRating: () => rating,
    getMovies: async (root, args, { Movies }) => {
      const movies = await Movies.find();
      return movies.map(movie => {
        movie.id = movie._id.toString();
        return movie;
      });
    },
    getTheatres: async (root, args, { Theatres }) => {
      const theatres = await Theatres.find();
      return theatres.map(theatre => {
        theatre.id = theatre._id.toString();
        return theatre;
      });
    },
  },
  Theatre: {
    screen: theatre => {
      console.log(theatre);
      return [
        {
          id: 1,
          theatreID: 2,
          auditoriumNumber: 3,
          showDetails: [],
        },
      ];
    },
  },
};
