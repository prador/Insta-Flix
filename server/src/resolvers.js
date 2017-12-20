const rating = {
  id: 1,
  provider: 'Rotten Potatoes',
};

export default {
  Query: {
    getRating: () => rating,
    getMovies: async (root, args, { db }) => {
      const arr = [];
      console.log('Roots ', root);
      await db.ref('/movies').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          arr.push(childData);
        });
      });
      return arr;
    },
    getMovie: async (root, args, { db }) => {
      console.log('args', args);
      await db
        .ref('/movies')
        .orderByChild('name')
        .equalTo(args.name)
        .on('child_added', data => {
          console.log(data);
          return data.val();
        });
    },
    getTheatres: async (root, args, { db }) => {
      const arr = [];
      console.log('Roots ', root);
      await db.ref('/movie-theatres').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          arr.push(childData);
        });
      });
      return arr;
    },
  },
};
