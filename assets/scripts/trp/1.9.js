//#1
// let n = 100;
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
//         console.log(i); // простое число
//     }
// //#2
// let b = 0;
// do{
//     console.log(b + " -> " + (b===0? "нуль" : b%2===0?"парне":"непарне"));
// }while (b++<10)
// //#3
// for (let c = 0; c<=9; console.log(c++));
//#4
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let i;
// let j;
// rl.question("What count triangle, rhombus, pyramid ? ", function(name) {
//     let count = parseInt(name);
//     for (let line = "*"; line.length < count; line += "*")
//         console.log(line);
//     console.log()
//     for (let i = 0; i < count; i++) {
//         let str = '';
//         for (let j = 1; j < count-i; j++) {
//             str = str + ' ';
//         }
//         for (let k = 1; k <= (2*i+1); k++) {
//             str = str + '*';
//         }
//         console.log(str);
//     }
//     console.log()
//     for (let i = 0; i < count; i++) {
//         let str = '';
//         for (let j = 1; j < count-i; j++) {
//             str = str + ' ';
//         }
//         for (let k = 1; k <= (2*i+1); k++) {
//             str = str + '*';
//         }
//         console.log(str);
//     }
//     for (let i = count-2; i >= 0; i--) {
//         let str = '';
//         for (let j = 1; j < count-i; j++) {
//             str = str + ' ';
//         }
//         for (let k = 1; k <= (2*i+1); k++) {
//             str = str + '*';
//         }
//         console.log(str);
//     }
//
// });
//#5
// let numb = 10000;
// let counter = 0;
// do {
//     numb/=2;
//     counter++;
// }
// while (numb>50)
// console.log(numb + "," + counter);
//#6
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What? ", function (month) {
//     let count = parseInt(month);
//     if (count < 0) throw new Error();
//     console.log(
//         month === 12 || month <= 3 ? 'winter' :
//             month >= 4 && month <= 6 ? 'spring' :
//                 month >= 7 && month < 9 ? 'summer' :
//                     'fall'
//     );
// });
//#7
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Wat? ", function (Tc) {
//     let count = parseInt(Tc);
//     console.log(
//         (9/5)*count + 32 + 'Tf'
//     );
// });
//#8
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Wat? ", function (day) {
//     let count = parseInt(day);
//     console.log(
//         count === 1 ? 'Monday' :
//             count === 2 ? 'Tuesday' :
//                 count === 3 ? 'Wednesday' :
//                     count === 4 ? 'Thursday' :
//                         count === 5 ? 'Friday' :
//                             count === 6 ?
//                                 'Saturday' : 'Sunday'
//     );
// });
