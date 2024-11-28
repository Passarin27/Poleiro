
const usuarios = JSON.parse(localStorage.getItem("usuarios"))
const tabela = document.getElementById("tabela-usuarios")

for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];

    const linha = `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.Nome}</td>
            <td>${usuario.Quantidade}</td>
            <td>${usuario.Descrição}</td>
        </tr>
    `
    tabela.innerHTML += linha
}