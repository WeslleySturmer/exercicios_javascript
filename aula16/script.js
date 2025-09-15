function parimp(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

function soma(n1=0, n2=0){
    return n1 + n2
}

let v = function(x) {
    return x*x
}

function fatorial(n){
    for(let i = n-1; i > 0; i--){
        n *= i
    }
    return n
}

// Maneira recursiva
function fatorial_recursivo(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial_recursivo(n - 1)
    }
}

console.log(parimp(10)) 
console.log(soma(2, 25))
console.log(v(5))
console.log(fatorial(5))
console.log(fatorial_recursivo(5))