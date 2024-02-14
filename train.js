console.log("train ishga tushdi");
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // Mahsulotlar qoldiqini hisoblash
  qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${
        this.lagmon
      } porse lag'mon va ${this.cola}ta cola mavjud!`
    );
  }

  // Mahsulotlardan sotish
  sotish(mahsulot, miqdori) {
    if (mahsulot === "non") {
      this.non -= miqdori;
    } else if (mahsulot === "lagmon") {
      this.lagmon -= miqdori;
    } else if (mahsulot === "cola") {
      this.cola -= miqdori;
    }
    console.log(
      `${miqdori}ta ${mahsulot} sotildi. Hozir ${this.getTime()}da qoldiq: ${
        this.non
      }ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola!`
    );
  }

  // Mahsulotlarni qabul qilish
  qabul(mahsulot, miqdori) {
    if (mahsulot === "non") {
      this.non += miqdori;
    } else if (mahsulot === "lagmon") {
      this.lagmon += miqdori;
    } else if (mahsulot === "cola") {
      this.cola += miqdori;
    }
    console.log(
      `${miqdori}ta ${mahsulot} qabul qilindi. Hozir ${this.getTime()}da qoldiq: ${
        this.non
      }ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola!`
    );
  }

  // Vaqtni qaytarish
  getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}

// Test
const shop = new Shop(4, 5, 2);
shop.qoldiq(); // Hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish("non", 3); // 3ta non sotildi. Hozir 20:40da qoldiq: 1ta non, 5ta lagmon va 2ta cola!
shop.qabul("cola", 4); // 4ta cola qabul qilindi. Hozir 20:40da qoldiq: 1ta non, 5ta lagmon va 6ta cola!
shop.qoldiq(); // Hozir 20:40da 1ta non, 5ta lagmon va 6ta cola mavjud!

//     B-TASK

// function countDigits(a) {
//   return a;
// }

// const b = 2;
// const c = countDigits(5 + b);

// console.log(c);

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
