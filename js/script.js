//Первая часть задания

let numberOfFilms;
let film = "";
let rate;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  while (!numberOfFilms || isNaN(numberOfFilms) || numberOfFilms < 0) {
    start();
  }
}

function myLvl() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
    start();
  }
}
function myFilms() {
  film = prompt("Один из последних просмотренных фильмов?");
  rate = +prompt("На сколько оцените его?");
  while (!film || film.length > 50 || !rate) {
    myFilms();
  }
}
function askMe() {
  for (let i = 0; i < 2; i++) {
    myFilms();
    personalMovieDB.movies[film] = rate;
  }
}

//Вторая часть задания

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы
// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 'Ваш любимый жанр под номером ${номер по порядку}'.
// Каждый ответ записывается в массив данных genres

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  }
}
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

start();

//Объект
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

//Вызов функций

myLvl();
askMe();
writeYourGenres();
showMyDB();
