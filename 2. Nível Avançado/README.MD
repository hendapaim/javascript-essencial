## Promise

É um constructor que recebe uma function como parámetro, e essa function recebe duas functions (resolve e reject) como parametro.

```js
let promise = new Promise((resolve, reject) => {
  resolve("Aqui tudo deu certo");
  reject("Aqui algo deu errado");
});
```

### Metodos de acopolamento do promise

- Existe varios m+etos os mais usados para lidar com os dados são:

    1 - then()

    2 - cagth()

    3 - finally()

Todos metodos recebem uma funcção como parametro

```js
promise.then((result) => {}).cagth((error) => {});
```

## async/await
