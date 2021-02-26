"use strict";
// //#1
// function seconds(total){
//     return total%60;
// }
// console.log(seconds(121));
// //#2
// const perimetr = (side,count) => {
//     return side*count;
// }
// console.log(perimetr(4,9))
// //#3
// function test(n){
//     for (let i = 1; i<=n; i++){
//         console.log(
//              i % 3==0 ? `${i} - fizz` :
//                 i % 5==0 ? `${i} - buzz` :
//                     i % 3==0 && n % 5==0 ? `${i} - fizzbuzz` : `${i} - fall`)
//     }
// }
// test(10)
//#4
// const caculate = (a,b,c) => {
//     return (a+b+c)/3;
// }
// console.log(caculate(2,3,4))
//#5
// function isDivisible(n,x,y){
// if (n % x === 0 && n % y === 0 ) {
//     return console.log("divisible")
// }
// else if (n % x !== 0 || n % y !== 0) {
//     return console.log("no divisible ")
// }

// console.log(
//     n % x === 0 && n % y === 0 ? "divisible" :
//         n % x !== 0 || n % y !== 0 ? "no divisible" : "fail"
// )

// let z = n % x === 0 && n % y === 0;
// switch (z) {
//     case true:
//         console.log("divisible")
//         break;
//     default :
//         console.log("no divisible")
//
// }
// }
// isDivisible(12,2,4)
//#6
// ((min, max) => {
//     let array = [];
//
//     for (let i = min; i < max; array.push(i++)) ;
//     array.sort(() => Math.random() - 0.5);
//
//     console.log('Array ->' + array);
//     console.log('Min ->' + Math.min(...array));
//     console.log('Max ->' + Math.max(...array));
//
//     console.log('Sum ->' + array.reduce((s,v)=>v+=s));
//     console.log('Average ->' + array.reduce((s,v)=>v+=s)/array.length);
//     console.log('Array no divide by 2 ->' + array.filter((s)=>s%2!==0));
//
// })(80, 100);
//#7
// (()=>{
//     let array = [];
//     for (let i = 0; i++ < 5; array.push([]));
//     array = array.map((arr,index)=>{
//         for (let i = 0;
//              i++ < 5;
//              arr.push(Math.random()<0.5?Math.round(Math.random()*-100):Math.round(Math.random()*100))
//         );
//        arr = arr.map((numb,_index)=>{
//             numb = _index === index ? numb < 0 ? 0 : 1 : numb;
//             return numb;
//         })
//         return arr;
//     });
//     console.log(array);
// })();
//#8


//#9
// ((x)=>{
//     console.log(
//         x > 0 && x % x == 0 ?
//             x % 1 == 0 && x % 2 == 0 ?
//                 x % 3 == 0 && x % 5 == 0 ?
//                     x % 6 == 0 && x % 9 == 0 ? `${x} - this is number more 0 and divisible on 2,3,5,6,9` : false : false : false : false
//     )
// })(90)
//#10
