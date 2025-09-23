let table = document.querySelector('#tabela_clientes')
let aside = document.querySelector('.aside')
document.querySelector('.btnMenu').addEventListener('click', mostrarMenu)

let data = [
  { "nome": "Ana Vitória", "data_nasc": '25/10/1998', "email": "ana_vitoria@gmail.com", "telefone": 49990124567},
  { "nome": "Bruno Carvalho", "data_nasc": '30/05/2002', "email": "bruno_carvalho@gmail.com", "telefone": 51980236745},
  { "nome": "Carla Silva", "data_nasc": '28/01/2005', "email": "carla_silva@gmail.com", "telefone": 51980091211}
]

function preencheTabela(){
    data.forEach((element) =>{
        const linha = table.insertRow(-1)

        const nome = linha.insertCell(0)
        const dataNasc = linha.insertCell(1)
        const email = linha.insertCell(2)
        const telefone = linha.insertCell(3)

        nome.textContent = element.nome
        dataNasc.textContent = element.data_nasc
        email.textContent = element.email
        telefone.textContent = element.telefone
        
    })
}

window.onload = preencheTabela

function mostrarMenu(){
  aside.classList.toggle('hidden')
}