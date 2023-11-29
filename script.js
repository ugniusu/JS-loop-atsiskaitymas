"use strict";
// ATSISKAITYMAS
// 1)
// let skaicius;
// do {
//   skaicius = parseInt(prompt("Iveskite skaiciu:"));
// } while (skaicius > 0);
// console.log(skaicius);

// 2)

// let skaicius = 0;

// while (skaicius < 100) {
//   skaicius++;
//   if (skaicius % 3 !== 0) {
//     console.log(skaicius);
//   }
// }

// 3)
// for (let i = 2; i < 12; i++) {
//   console.log(i ** 3);
// }

// 4)
// const persons = {
//   jonas: 30,
//   petras: 26,
//   ona: 45,
//   maryte: 36,
//   antanas: 77,
//   "teta zita": 86,
// };

// for (let i in persons) {
//   const amzius = persons[i];
//   console.log(`${i} ${amzius} metai`);
// }

// 5)
// const john = {
//   lastName: "Cena",
//   age: 44,
//   bestFriend: "Rudy",
//   hasDriverLicense: true,
//   hobbies: ["basketball", "football", "baseball"],
// };

// let suma = 0;
// for (let i in john) {
//   suma++;
// }
// console.log(`Tavo savybiu yra ${suma}`);

// 6)
// const sakinys = prompt("Iveskite sakini");
// let zodis = "";
// for (let i = 0; i < sakinys.length; i++) {
//   const dabar = sakinys[i];
//   if (dabar !== " ") {
//     zodis += dabar;
//   } else {
//     console.log(zodis);
//     zodis = "";
//   }
// }
// if (zodis !== "") {
//   console.log(zodis);
// }

// 7)
// const sakinys = "Labas rytas visiems, kas normalus";
// let suma = 0;
// for (let i of sakinys) {
//   suma++;
// }
// console.log(
//   `Simboliu kiekis yra ${suma} ir palyginimas su length yra ${sakinys.length}`
// );

// 8)
// let skaicius = 20;

// while (skaicius <= 50) {
//   if (skaicius % 2 === 0) {
//     console.log(skaicius);
//   }
//   skaicius++;
// }

// 9)
// let skaicius;
// do {
//   skaicius = parseInt(prompt("Iveskite skaiciu"));
//   if (skaicius > 0) {
//   } else {
//     alert(`Tavo ivestas neigiamas skaicius yra ${skaicius}`);
//   }
// } while (skaicius > 0);

// 10)
// let skaicius;
// let suma = 0;
// do {
//   skaicius = parseInt(prompt("Iveskite skaiciu:"));
//   if (skaicius > 0) {
//     suma += skaicius;
//   } else if (skaicius < 0) {
//     alert("Ivedete neigiama skaiciu, iveskite teigiama");
//   } else {
//     break;
//   }
// } while (true);
// console.log(`Jusu ivestu teigiamu skaiciu suma lygi ${suma}`);
