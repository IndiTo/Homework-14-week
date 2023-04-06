//14 неделя Теория

/*1. Массивы - Массивы — структуры данных, которые могут хранить не одно, 
а несколько значений. 

2. Каждому элементу массива автоматически присваивается порядковый номер, 
по которому к нему можно обратиться. Нумерация элементов идёт слева-направо начиная с нуля. 
Порядковый номер элемента в программировании называется индексом. 
Элементы массива нумеруются слева-направо, начиная с нуля.

3. В массиве могут храниться элементы любого типа, даже функции, объекты и другие массивы.

const array = ["Собака", 48, true]. 
*/


/*
4. 

*/


//5.
/*
let mas = new Array(2);
mas[3] = 5;
console.log(mas[3]);   // 5
*/


//6.
/*let mas = new Array(2);
mas[3] = 5;
console.log(mas3); // mas3 is not defined
*/

/*
7. Что делает строка let mas = new Array()? // Создает массив, вариант синтаксиса массива. Применяется редко,так как квадратные скобки [] короче. 
*/

/*
8. В массиве могут храниться элементы любого типа, даже функции, объекты и другие массивы
*/


//9.
/*let a = new Array(2);
a[1] = null;
console.log(a)  // 2
*/

//10.
/*
const students = ["Lena", "Olya", "Ylia", "Roma" ,  "Vova" ];
console.log(students[3]); //Roma
*/

//11
/*
const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];

console.log(fruits.shift()); //удаляем первый элемент массива и возвращаем его значение //Груша

console.log(fruits); // ['Яблоко', 'Лимон', 'Ананас']
*/

//Практическое задание

const directors = [
    {
            name: 'Стивен Спилберг',
            career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
            films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
            top_rated_film: 'Список Шиндлера'
        },
        {
            name: 'Кристофер Нолан',
            career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
            films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
            top_rated_film: 'Начало'
        },
        {
            name: 'Мартин МакДона',
            career: 'Сценарист, Режиссёр, Продюсер',
            films: 'https://www.film.ru/person/martin-makdonah',
            top_rated_film: 'Три билборда на границе Эббинга, Миссури'
        },
        {
            name: 'Алексей Балабанов',
            career: 'Режиссёр, Сценарист, Актёр, Продюсер',
            films: 'https://www.film.ru/person/aleksey-balabanov',
            top_rated_film: 'Брат'
        },
        {
            name: 'Питер Фаррелли',
            career: 'Продюсер, Режиссёр, Сценарист, Актёр',
            films: 'https://www.film.ru/person/piter-farrelli',
            top_rated_film: 'Зелёная книга'
        },
        {
            name: 'Юрий Быков',
            career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
            films: 'https://www.film.ru/person/yuriy-bykov',
            top_rated_film: 'Дурак'
        },
        {
            name: 'Жан-Марк Валле',
            career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
            films: 'https://www.film.ru/person/zhan-mark-valle',
            top_rated_film: 'Далласский клуб покупателей'
        },
    ];

const myList = document.getElementById('myList');
let ourDirectors = '<h1>Список режиссеров</h1>'
let ourBestFilms = '<h1>Список лучших фильмов</h1>'

directors.forEach((item) => {
    ourDirectors = ourDirectors + `<p>${item.name}</p>`
}) 

let topFilmList = directors.map((item) => {
    return item.top_rated_film;
})

topFilmList.forEach((item) => {
    ourBestFilms = ourBestFilms + `<p>${item}</p>`
})

myList.innerHTML = ourDirectors + ourBestFilms;