const rating = {
  id: 1,
  provider: 'Rotten Potatoes',
  score: 9.9,
};

export default {
  Query: {
    getRating: () => rating,
  },
};
