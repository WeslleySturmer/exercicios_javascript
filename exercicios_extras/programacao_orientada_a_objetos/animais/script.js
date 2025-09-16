class Animal {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`${this.nome} fez um barulho`)
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(`${this.nome} latiu`)
    }
}

class Gato extends Animal{
    falar(){
        console.log(`${this.nome} miou`)
    }
}

let maggy = new Cachorro('Maggy')
let windy = new Gato('Windy')

maggy.falar()
windy.falar()