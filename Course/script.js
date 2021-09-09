'use strict';

const numberOfFilms = +prompt('how many films have you watched ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('what is your last watched movie ?', '' ),
      b = prompt('how would you rate the movie ?', '' ),
      c = prompt('what is your last watched movie ?', '' ),
      d = prompt('how would you rate the movie ?', '' );
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
