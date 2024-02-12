console.log("train ishga tushdi");
//     B-TASK

function countDigits(a) {
  return a;
}

const b = 2;
const c = countDigits(5 + b);

console.log(c);

// console.log(countLetter("e", "engineer"));

// A-TASK

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));

// --------------------20-21 darlar--------------------

// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba bo'ling", // 0-20
// "to'ri boshliq tanlang va kop hato qiling", //20-30
// "O'zingizga ishlashingizni boshlang", //30-40
// "Siz kuchli bolgan narsalarni qiling", //40-50
// "Yoshlarga incestitsiya qiling", //50-60
// "Endi dam oling, foydasi yo'q endi", //60
// ];

//-----------call-back----------------

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback ("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1])
//     else if (a > 30 && a <= 40) callback(null, list[2])
//     else if (a > 40 && a <= 50) callback(null, list[3])
//     else if (a > 50 && a <= 60) callback(null, list[4])
// else {
//     setTimeout(function() {
//         callback(null, list[5]);
//     }, 5000);

//     // callback(null, list[5]); o'rni ga tegadegi ishlatsak ham boladi
// }
// }

// console.log("Passed here 0");
// maslahatBering ("65", (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
// });

// console.log("passed here 1");

// -------------------Asynchronous function--------------------------------
// async function maslahatBering(a,) {
//     if (typeof a !== "number") throw new Error ("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
// else {
//   return new Promise ((resolv, reject) => {
//             setInterval(() => {
//             resolve(list [5]);
//             }, 1000);
//         });

// return new Promise ((resolv, reject) => {
//     setTimeout(() => {
//         resolve(list [5]);
//     }, 1000);
// })

// setTimeout(function() {
//     callback(null, list[5]);
// }, 5000);

// }
// }

//---------------------------

// console.log("Passed here 0");
// // then/catch
// maslahatBering(20)
//  .then((data) => {
//     maslahatBering(30)
//  .then((data) => {
//     maslahatBering(40)
//  .then((data) => {                           //<-- bu holat ozgina chalkashroq
//     console.log("Javob", data);
//  })
//  .catch ((err) => {
//     console.log("ERROR:", err);
//  });

// console.log("passed here 1");
//     console.log("Javob", data);
//  })
//  .catch ((err) => {
//     console.log("ERROR:", err);
//  });

// console.log("passed here 1");
//     console.log("Javob", data);
//  })
//  .catch ((err) => {
//     console.log("ERROR:", err);
//  });

// console.log("passed here 1");

//await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
