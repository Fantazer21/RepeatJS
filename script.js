//Task 1
// let numberOfFilms = prompt('How many movies you have seen?', 'number of movies')
//
// let lastFilm = prompt('What last movie you have seen?', 'last movie')
//
// let mark = prompt('Give your mark', 'mark')
//
// if (numberOfFilms.length < 4) {
//     alert('less 4')
// }
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
//
// personalMovieDB.movies[lastFilm] = mark
//
// console.log(personalMovieDB.movies)


//Task 2

// const showMyDb = () => {
//     if (personalMovieDB.privat === false) console.log(personalMovieDB.movies)
// }
//
// const writeYourGenres = () => {
// return (console.log('bla bla bla'))
// }
//
// showMyDb()

//Task 3

let personalMovieDB = {
    count: 12,
    movies: {shark: '8.1' },
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB() {
        return this.privat = !this.privat
    }
}

const first = personalMovieDB.privat
console.log( first)

personalMovieDB.toggleVisibleMyDB()

console.log(personalMovieDB.privat)