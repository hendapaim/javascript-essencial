async function f() {
  console.log("Async function");
  return Promise.resolve(1);
}

f().then((dados) => {
  console.log(dados);
});

console.log("aiiiiiiiiiiiiii")

function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    
}

let display = setInterval(showTime, 5000);