class Animal {
  constructor(name, age, patas) {
    this.name = name;
    this.age = age;
    this.patas = patas;
  }
}

class Lion extends Animal{
    constructor(name, age, patas, pelo){
        super(name, age, patas);
        this.pelo = pelo;
    }

    ruvar(){
        console.log("ruuuuuum");
    }
}

const cao = new Animal("rakira", 10, 4)
const lion = new Lion("henda", 3, 4, true);

console.log(cao);
console.log(lion);