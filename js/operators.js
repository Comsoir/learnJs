// /******************************
//  * Операторы
// */
//
// /******************************
//  * Унарный, бинарный, операнд */
//
// //Ураный
// let x = 6;   //чаще всего операнды называют агрументами
// x = -x;
// console.log(x);
// //Напишем простое сложение со значеним ураного минуса
// let y = 12;
// let c = y - x;
// /* в языке JS переобразование значение происходит сразу, поэтому значение -6 при условие y - x, где y = 12 выходит
//      что -6 стал + 6 и ответ будет 18, но если мы определим условия так y - -x, то значение в x так же останеться
//      с минусом и произойдет вычетиние и ответ будет равен 6
//  */
// console.log(c); //