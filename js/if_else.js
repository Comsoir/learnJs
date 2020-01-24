/***********************************
 * Условние операторы
 */


//if then else
// let year = prompt('Сколько вам лет?');
// if (year == 23) { //не знаю почему webstorm пишет ошибку
//     alert('Вы правы')
// } else {
//     alert('Вы даун')
// }
//
// //ситаксис значение ?
// let result = 'условие ? значение1 : значение2';
// // Пример
// let age;
// let man = (age > 18) ? true : false; // можно не рассписывать так как этот код и так возвращает true ? false
// // лучший код выглядил бы так
// let women = (age > 18); // вот такой код является наиболее правильным

//Задачи

// let name = prompt('Какое «официальное» название JavaScript?');
// if (name === 'ECMAScript') {
//     alert('правильно')
// } else {
//     alert('You don\'t know? “ECMAScript”!')
// } //выполнено

// let value = prompt('Введите число');
// if (value > 0) {
//     alert(1)
// } else if (value < 0) {
//     alert(-1)
// } else {
//     alert(0)
// } //выполнено

// перепешите в конструкцию ?
// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
//
// let value = (a + b < 4) ? 'мало' : 'много';

// перепешите в конструкцию  else if
let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

message = (login == 'Сотрудник')
    ? 'Привет' : (login == 'Директор')
        ?  'Здраствуйте' : (login == '')
            ? 'нет логина' :  '';
//решено