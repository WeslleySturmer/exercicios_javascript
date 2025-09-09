var nome = window.prompt('Qual seu nome?')
var idade = window.prompt('Qual sua idade?')

if (nome != null && idade != null)
    document.body.innerText = 'Seu nome é ' + nome + ' e sua idade é ' + idade
else if (nome == null && idade != null)
    document.body.innerText = 'Não sei seu nome, mas sua idade é ' + idade
else if (nome != null && idade == null)
    document.body.innerText = 'Seu nome é ' + nome + ' mas não sei sua idade'
else
    document.body.innerText = 'Não sei seu nome nem sua idade, atualize a página e preencha os campos'
