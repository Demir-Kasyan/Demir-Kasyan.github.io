"use strict"
//
// function task1() {
//     const dayOfWeek = {
//         dayEN: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         dayUA: [ 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя']
//     }
//     for (let i = 0; i < 1; i++){
//         let seLan = prompt("Виберіть мову “ua” або “en”?", '').toLowerCase();
//         if ( seLan === 'ua' || seLan === 'en') {
//             if (seLan === 'ua') {
//                 for (let y = 0; y < 1; y++) {
//                     let selDay =+ prompt('Введіть номер дня неділі від 1 до 7?', '')
//                     if (selDay <= 7) {
//                         alert(dayOfWeek.dayUA[selDay - 1])
//                     } else if ( selDay > 8 || selDay <= 0 ) {
//                         alert('mistake, try again')
//                         y--;
//                     }
//                 }
//             } else if (seLan === 'en') {
//                 for (let y = 0; y < 1; y++) {
//                     let selDay =+ prompt('Enter the day number of the week (from 1 to 7)?', '')
//                     if (selDay <= 7) {
//                         alert(dayOfWeek.dayEN[selDay - 1])
//                     } else if ( selDay > 8 || selDay <= 0 ) {
//                         alert('mistake, try again')
//                         y--;
//                     }
//                 }
//             }
//         } else {
//             alert('mistake, try again');
//             i--;
//         }
//     }
// }
// //task1();
//
// function Board(length, width) {
//     this.length = length;
//      this.width = width;
//     let string = '';
//     let str = '';
//     for (;length > 0; length--){
//         string += '\n'
//         string += length;
//         for (let y = 1; y < width + 1; y++){
//             if ( y % 2 !== 0){
//                 string += " #"
//             } else string += " @"
//         }
//     }
//     console.log(string)
//     for (let i = 0; i < width; i++) {
//         str += String.fromCodePoint(65 + i) + ' ';
//     }
//     console.log('  ' + str);
// }
//
// let chess = new Board(9, 9);
// console.log(chess);
//
// class Random {
//     static nextDouble(low,high){
//         return ((Math.random() * high) + low).toFixed(1);
//     }
//     static nextInt(low,high){
//         return Math.floor(Math.random() * high) + low;
//     }
//     static nextElement(array){
//         return array[Math.floor(Math.random() * array.length)]
//     }
// }
//
// console.log(Random.nextDouble(1,10))
// console.log(Random.nextInt(1,10))
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(Random.nextElement(arr))

// //#5
//
// function sequence(start, step) {
//     return () => (start === 0 ? start += 1 : start += step)
// }
// let generator = sequence(10, 3);
// let generator2 = sequence(7,1);
//
// console.log(generator());
// console.log(generator2());
// console.log(generator());
// console.log(generator2());
// console.log(generator());

//#6
// let characters = [
//     {name: "Barney", age: 36},
//     {name: "Fred", age: 40}
// ];
//
// function pluck(array) {
//     return array.map(item => item.name)
//         .filter((value, index, self) => self.indexOf(value) === index)
// }
//
// console.log(pluck(characters)); //['Barney', 'Fred'];

//#7

// function count(obj) {
//     let count = 0;
//     for (let key in obj) {
//         count++
//     }
//     return count;
// }
//
// let a = { a: 1, b: 2 };
// console.log(count(a)); // 2
// let b = function () {};
// console.log(count(b)); // 0
// let c = [1, 2, 3];
// console.log(count(c)); // 3
// let d = [];
// d[100] = 1;
// console.log(count(d)); // 1

//#8

// class Task {
//     constructor(name, description, startDate, endDate) {
//         this.name = name;
//         this.description = description;
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
//     subtask(){
//         let today = new Date();
//         return Math.round(( ( today - Date.parse(this.startDate)) / ( Date.parse(this.endDate) - Date.parse(this.startDate) ) ) * 100) + "%"
//     }
// }
//
// let t1 = new Task('Выучить английский', 'Нужно выучить!', 'Jan 8, 2021','Feb 23, 2021' )
// console.log(t1)
// console.log(t1.subtask())


//#9
//
// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() { return console.log(`Salary worker: ${this.days * this.days}`) }
// }
// let w1 = new Worker('Misha', 'Reshetnikov', 400, 15)
// let w2 = new Worker('Shmidt', 'Kovalenko', 150, 10)
// let w3 = new Worker('Alex', 'Komisarov', 340, 20)
// w1.getSalary();
// w2.getSalary();
// w3.getSalary();
// console.log(w1)
// console.log(w2)
// console.log(w3)

//#10
