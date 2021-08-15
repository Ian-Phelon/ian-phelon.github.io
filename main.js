'use strict';





//////////////
// input an obj. if it has any numeric values, double the value in the object
// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const element = obj[key];
//             if(typeof element == 'number'){obj[key]*=2}
            
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// alert(menu.width+menu.title);
// multiplyNumeric(menu);
// alert(menu.width + menu.title);
////////////////
// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
//   let schedule = {};
//   alert( isEmpty(schedule) ); 
//   schedule["8:30"] = "get up";
//   alert( isEmpty(schedule) ); 
////////////////////////
// let user = {};
// user.name = "john";
// user.surname = 'smith';
// user.name = 'pete';
// delete user.name;

//////////////////
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask('do u agriey', () => alert('you did'), () => alert('you dinnit'));
///////////
// var greetingTitle = "Who wishes to enter?"
// var adminKey = 'admin';
// var pwKey = 'hello'
// var initialPrompt =
//     prompt(greetingTitle, '');
// if (initialPrompt === adminKey) {
//     var passwordPrompt = prompt('Enter Password', '');
//     if (passwordPrompt === pwKey) {
//         alert('Access Acquired', '');
//     } else if (passwordPrompt === null || passwordPrompt === '') {
//         alert('You Cancelled', '');
//     } else {
//         alert('oops', '');
//     }
// }
// else if (initialPrompt === null || initialPrompt === '') {
//     alert('You Cancelled', '');
// }
// else {
//     alert('Not a member', '');
// }
//////////
// var userName = prompt('name?', '');
// alert(userName);
// var printName = userName;
/////////////
// let name;
// let admin;
// this.name = 'John';
// admin = this.name;
// alert(admin);
/////////
// alert('my alert');