const login = document.querySelector('#login')
const password = document.querySelector('#senha')
const olho = document.querySelector('#olho')
const submitBtn = document.querySelector('#submit')
const main = document.querySelector('main')
const response = document.querySelector('.response')

olho.addEventListener('click', alteraCampoSenha)
submitBtn.addEventListener('click', validaUsuarioSenha)

function alteraCampoSenha(){
    if (olho.classList.contains('fa-eye')){
        olho.classList.replace('fa-eye', 'fa-eye-slash')
        password.type = 'text'
    } else {
        olho.classList.replace('fa-eye-slash', 'fa-eye')
        password.type = 'password'
    }
}

async function chamaApiUsuarios(){
    let response = await fetch('./users.json')
    let data = await response.json()

    return data
}

async function validaUsuarioSenha(){
    let usuario = login.value
    let senha = password.value

    let data = await chamaApiUsuarios()

    if (data.some(user => (usuario == user.username || usuario == user.email) && (senha == user.password && user.status == "ativo"))){
        window.location.href = 'home.html'
    } else if (data.some(user => (usuario == user.username || usuario == user.email) && (senha == user.password && user.status == "inativo"))){
        response.classList.add('hidden')
        response.innerText = 'Usuário inativo, verifique com o administrador do sistema e tente novamente'
        response.style.padding = '0px'

        setTimeout(() =>{
            main.appendChild(response)
            response.classList.remove('hidden')
        }, 500)
    } else {
        response.classList.add('hidden')
        response.innerText = 'Dados inválidos, tente novamente'
        response.style.padding = '0px'

        setTimeout(() =>{
            main.appendChild(response)
            response.classList.remove('hidden')
        }, 500)
    }
}

