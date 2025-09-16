class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
    }

    aniversario(){
        this.idade += 1
    }
}

let weslley = new pessoa('Weslley', 20)

weslley.apresentar()
weslley.aniversario()
weslley.apresentar()
