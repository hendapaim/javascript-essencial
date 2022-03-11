//* callback
function message(text) {
  console.log(text);
}

function welcome(greeting, callback) {
  callback(greeting);
}

welcome("Ola tudo deu certo", message);
//
