/* Конструция switch */

//switch это конструкция заменяющие несколько if

//Пример кода
/*
switch (x) {
    case 'value':
        break;

    case 'value1':
        break;

    default:
        alert('Привет')
}*/

//Пример работы

// let age = 20 + 3;
//
// switch (age) {
//     case 21:
//         alert('молод');
//         break;
//     case 22:
//         alert('почти');
//         break;
//     case 23: // правильное значение так как age === 23
//         alert('красавчик');
//         break;
//     default:
//         alert('ну ты и лох');
// }

// Задачи
// let browser;
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera' ) {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число от 0 до 3','');
//
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }