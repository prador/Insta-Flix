type Theater {
  id : Int,
  name : String,
  location : Location,
  screen : [Screen]
}

type Movie {
  name : String,
  id : Int,
  runtime : Int,
  showtime : Showtime
  description : String,
  genre: [String],
  rating: [Rating],
  language: String,
  certificate: String,
  director: String,
  cast : [String]
}

type Location{
  id : Int,
  lat : Float,
  long : Float,
}
  
type Rating {
  id : Int
  provider : String,
  score : Float
}

type Screen {
  auditoriumNumber : Int,
  showTimings: [Showtime]
}
  
type Showtime {
  id : Int,
  movie: Movie,
  timeOfMovieStart : Int,
  seats : Seats
}

type Seats {
  number : Int,
  cost : Int
}