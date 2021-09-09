'use strict';

const numberOfFilms = +prompt('how many films have you watched ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0 ; i < 2; i++){
    let  a = prompt('what is your last watched movie ?', '' ),
          b = prompt('how would you rate the movie ?', '' );
     
          while (a === null && a === "") {
            a = prompt('what is your last watched movie ?', '' );
          }
          
          while (b === null && b === "") {
            b = prompt('how would you rate the movie ?', '' );
          }
            console.log(a);
                  
   personalMovieDB.movies[a] = b;
  }
  
  



console.log(personalMovieDB);




