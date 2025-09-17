class Calculadora{
    static soma(a,b){
        return a + b
    }

    static subtracao(a,b){
        return a - b 
    }

    static multiplicacao(a,b){
        return a * b
    }

    static divisao(a,b){
        if (b==0){
            throw new Error('Não é possível fazer divisão por zero')
        } else {
            return a / b
        }
    }
}

let a = 10
let b = 0

console.log(Calculadora.soma(a, b))
console.log(Calculadora.subtracao(a, b))
console.log(Calculadora.multiplicacao(a, b))
console.log(Calculadora.divisao(a, b))