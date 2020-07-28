const headerProps = Object.freeze({
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!"
})

const initialState = Object.freeze({
    user: { name: '', email: '' },
    list: []
})

const baseUrl = "http://localhost:3001/users"

module.exports = {
    headerProps,
    initialState,
    baseUrl
}