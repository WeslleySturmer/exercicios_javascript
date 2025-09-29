const filtroNome = document.querySelector('#filtroNome')
const filtroPapel = document.querySelector('#filtroPapel')
const filtroAtivo = document.querySelector('#filtroAtivo')
const filtroBtn = document.querySelector('#filtroBtn')
const tabelaUsuarios = document.querySelector('#tabela_usuarios')

filtroBtn.addEventListener('click', filterUsers)
window.onload = loadUsers()

async function getUsers() {
    let response = await fetch('./users.json')
    let data = await response.json()

    return data
}

async function loadUsers() {
    let users = await getUsers()

    showUsers(users)
}

function showUsers(users) {
    tabelaUsuarios.innerHTML = '<thead> <tr> <th>Id</th> <th>Nome</th> <th>Email</th> <th>Papel</th> </thead> <tbody></tbody>'
    
    if (users == ''){
        tabelaUsuarios.innerHTML = '<p>Nenhum usuário encontrado</p>'
    } else {
        users.forEach(user => {
            let newLine = tabelaUsuarios.insertRow(-1)

            const user_id = newLine.insertCell(0)
            const user_name = newLine.insertCell(1)
            const user_email = newLine.insertCell(2)
            const user_role = newLine.insertCell(3)

            user_id.textContent = user.id
            user_name.textContent = user.name
            user_email.textContent = user.email
            user_role.textContent = user.role
        });
    }
}

async function filterUsers(){
    let users = await getUsers()

    if (filtroNome.value != ''){
       users = users.filter(user => user.name.toLowerCase().includes(filtroNome.value.toLowerCase()))
    }
    if (filtroPapel.value != 'ambos'){
        users = users.filter(user => user.role == filtroPapel.value)
    } 
    if (filtroAtivo.value != 'ambos'){
        users = users.filter(user => user.status == filtroAtivo.value)
    }

    showUsers(users)
}
