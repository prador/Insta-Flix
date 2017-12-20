export const movieModel = mongoose =>
  mongoose.model('movies', {
    name: String,
    runtime: Number,
    description: String,
    genre: Array,
    language: String,
    certificate: String,
    director: Array,
    cast: Array,
  });

export const theatreModel = mongoose =>
  mongoose.model('movie-theatres', {
    name: String,
    latitude: Number,
    longitude: Number,
  });
