//* Promise
// const count = true;
// let promise = new Promise((resolve, reject) => {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("there is no count value");
//   }
// });

let pessoas = new Promise((resolve, reject) => {
  resolve("Meus dados com sucesso");
  reject("Aqui deu errado");
});

pessoas.then((d) => console.log(d)).catch((e) => console.log(e));
//
console.log("Meus dadosdddddddddddd");
