// 'use strict';

// console.log("Bonjour");


// let username_1; 

// const userStatus = 1;




// let mystring = "Hello";


// let mynumber = 1.5;
// let myBoolean = true;
// let myUndefiend = undefined;
// let myNull = null;

// console.log("Hello" + "World");
// const str1 = "Hello";
// const str2 = "World"; 
// console.log(`${str1} ${str2}`);










// let a = 10 + 32;
// a = a + 8;
// a += 8;
// console.log('a', a);

// let b = 10 - 5;
// b -= 8;
// console.log('b', b);

// let c = 5 * 7;
// c *= 2;
// console.log('c', c);

// let d = 10 / 2;
// d /= 2;
// console.log('d', d);

// let e = 5;
// console.log(e++);
// console.log(e);

// console.log([1, 2, 3] * 3)
// console.log(+'3');
// console.log(+true);

// console.log('4' + 3);


// console.log(2 > 1);
// console.log(2 < 1);
// console.log(20 >= 10);
// console.log(20 <= 10);
// console.log(4 !== 6);
// console.log("hello" === "hello")





// if(5 > 0 && 5 < 10) {
//     console.log('1');
// } else {
//     console.log('2');
// }


// let f = 20 / 2;
// if(f > 10 || f < 15 ) {
//     console.log('yes');
// } else {
//     console.log('no')
// }


// let isPrivate = true
// let isMember = false
// if(isPrivate === false || (isPrivate === true && isMember === true)) {
//     console.log('can see the group');
// } else {
//     console.log("can't see the group");
// }


// const today = 'lundi';
// if (today === 'lundi') {
//     console.log ("Aujourd'hui on est ${today}");
// }if (today === 'mardi') {
//     console.log ("Aujourd'hui on est ${today}");
// }if (today === 'mercredi') {
//     console.log ("Aujourd'hui on est ${today}");
// }if (today === 'jeudi') {
//     console.log ("Aujourd'hui on est ${today}");
// }if (today === 'vendredi') {
//     console.log ("Aujourd'hui on est ${today}");
// }


// switch (today) {
//     case 'lundi':
//     console.log (`Aujourd'hui on est ${today}`);
//     break;
//     case 'mardi':
//     console.log (`Aujourd'hui on est ${today}`);
// }




// let username = prompt('What is your name?');
// console.log('username', username);

// // if (username) {
// //     alert(`Nice to meet you ${username}`);
// // }else {
// //     alert("Don't be shy!")
// // }


// username !== null ?
// alert(`ramenez la coupe a la maison ${username}`) :
// alert("Don't be shy!");



// // function myFunct() {
// //     console.log ('Hello World');
// // }
// // console.log(myFunct());


// // const myFunc2 = () => {
// //     return text;
// // }
// // console.log('myFunc', myFunc)






// // const sum = (p1, p2 = 0) => {
// //     return p1 + p2;
// // }
// // console.log(sum(4, 10));

// // const truncate = (str, length, trail) =>{
// //     if (str.length > length) {
// //         return str.substring(0, length) + trail
// //     }else {
// //         return str
// //     }
// // }

// // const myArray = [1, 'hello', [1, 2, 3]]
// // console.log('myArray', myArray)
// // console.log(myArray[0]);
// // console.log(myArray[1]);
// // console.log(myArray.length);
// // console.log(myArray.length - 1);


// // const arr = [0, 1, 2, 3, 4, 5];
// // arr.map(x => {
// //     console.log('x', x);
// //     return x/2;
// // });


// // let res = [];
// // arr.forEach(num => {
// //     console.log('num', num)
// //     res.push(num / 2);
// // })

// // console.log('res', res);

// // const myArr = [1, 2, 3]
// // const myArr2 = [...myArr]


// // const user = {
// //     id : 1,
// //     name : 'Jaune-attend',
// //     email : 'email',
// //     car: {
// //         color : 'red',
// //     }
// //     teihgcfxdtr: [1, 2, 3],
// // }


// // console.log(user.id);
// // console.log(user['id']);
// // console.log(user['car'].color);




// const cart = [
//     { item: 'a', price: 2, quantity: 1}
//     { item: 'b', price: 3, quantity: 1}
//     { item: 'c', price: 4, quantity: 1}
// ];

// const res = cart.reduce((acc, curVal) => {
//     console.log('acc', acc)
//     console.log('curVal', curVal);
//     return acc += curVal.price * curVal.quantity
// }, 0)

// console.log('res', res);

myCharacter = 'Luna Lovegood';

myCharacterHouse = useSortingHat()

isMyCharacterRich = checkMyGringottAccount()

function useSortngHat(char) {
  let choice = ''
  
  switch (ch) {
    case 'Harry Potter':
      choice = 'Gryffindor';
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
    default:
      'Gryffindor'
  }
}

// const checkMyGringottsAccount = () 
//   myMoney = Math.random() * 100

//  if (myMoney > 0 || myMoney < 30)
// {
//     return 'Hello Weasley'
// } else if ( myMoney > 30 ||  myMoney < 75 );
//    {
//     return `Hey, that's cool`
//    }
// }
//  else {
//     return "You're reach!"
//    }
// }

// if (myMoney > 0 || myMoney < 30){
//     return 'Hello Weasley'
// }else if (myMoney > 30 || myMoney < 75 ) {
//     return "Hey, that's cool"
// } else {
//     return "You're reach!"
//  }
// }