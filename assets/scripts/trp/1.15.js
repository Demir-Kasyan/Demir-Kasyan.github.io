
// let num = 9991;
//
// function numberToObject(number){
//     let arr = number.toString().split('').reverse();
//     return {
//         units: !arr[0] ? 0 : arr[0],
//         tens:  !arr[1] ? 0 : arr[1],
//         hundreds: !arr[2] ? 0 : arr[2],
//         thousands: !arr[3] ? 0 : arr[3]
//     };
// }
// console.log(numberToObject(num));

// console.log(((str) => {
//    return str.split('.')[1];
// })('/home/user/project/main/main.js'));

// console.log(((arr) =>{
//     let mass = [];
//     return arr.filter(x=>{
//         if(mass.includes(x)){
//             return false;
//         }
//         else {
//             mass.push(x);
//             return true;
//         }
//     });
// })([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]))

// console.log(((str) => {
//     let vowels = ['а','е','и','і','о','я','ю','є','ї'];
//     let result = {
//         text: str,
//         vowels: 0,
//         consonants: 0
//     };
//     str.split(' ').forEach(x => {
//         if (vowels.includes(x.split('')[0])) {
//             result.vowels++
//         } else {
//             result.consonants++
//         }
//     })
//     return result;
// })('шкіпер юбить качатися'));

// console.log(((email)=>{
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// })('te@sttest.test'));

// console.log(((str) => {
//     let newstr = str.match(/the/gi);
//     return newstr;
// })('RegExr0 was created by gskinner.com, and is proudly hosted by Media Temple.\n' +
//     '\n' +
//     'Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.\n' +
//     '\n' +
//     'The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.\n' +
//     '\n' +
//     'Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.'));

// console.log((() =>{
//     let months = ['січня', 'лютого', 'березеня' , 'квітеня', 'травня', 'липеня', 'червеня', 'серпеня', 'вересеня', 'жовтеня', 'листопада', 'груденя'];
//     let daysWeek = ['понеділок', 'вівторок', 'середа', 'четвер', 'пятниця','субота','неділя'];
//     let dayWeek, time, dd, mm, yyyy;
//     let date = new Date();
//     dayWeek = daysWeek[date.getDay()-1];
//     time = date.toLocaleTimeString();
//     dd = date.getDay()
//     mm = months[date.getMonth()]
//     yyyy = date.getFullYear()
//
//     return `${time}, ${dayWeek}, ${dd} ${mm} ${yyyy} року`
// })());
// (()=>{
//     alert('Розпочинається гра "Вгадай число"!');
//     let answer = true;
//     let date = new Date();
//     while (answer){
//         let hint = '';
//         let attempts = 0;
//         let attempt = 0;
//         let result = Math.floor(Math.random() * 100);
//         let win = false;
//         while(win = (result !== (attempt = +prompt('Вгадуй число!' + hint + ':)')))){
//                hint = attempt+15 <= result || attempt-15 >= result ? 'Дуже холодно' :
//                    attempt+10 <= result || attempt-10 >= result ? 'Холодно':
//                        attempt+5 <= result || attempt-5 >= result ? 'Гаряче':'Дуже гаряче';
//                attempts++;
//                console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}
//                 Спроба ${attempts}: число ${attempt} – не вірно`)
//         }
//         console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}
//                 Спроба ${attempts}: число ${attempt} – вірно`)
//         answer = confirm(`Вам вдалося вгадати число ${result} за ${attempts} спроб!\nБажаєте ще раз зіграти?`)
//     }
// })();
