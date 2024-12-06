
const tabelaprodutos = document.getElementById("FormCadastro")
const produtos = JSON.parse(localStorage.getItem("produtos"))
if (!produtos) {
    localStorage.setItem("produtos", JSON.stringify([]))
    location.reload()
}
function salvarnolocalstorage() {
    const nome = document.getElementById("nome").value;
    const Quantidade = getElementById("Quantidade").value;
    const Descrição = getElementById("Vencimento").value;
    if (!nome || !Quantidade || !Descrição) {
    }
    const produto = {
        id: 'produto-' +
        Date.now(),
        nome:nome,
        Quantidade:Quantidade,
        Vencimento:Vencimento
    };
let produtos =
JSON.parse(localStorage.getItem('produtos'))||[];
produtos.push (produto);
localStorage.setItem('produtos',JSON.stringify(produtos));
alert('Produto salvo com sucesso!');
document.getElementById('tabelaProdutos').requestFullscreen();
}

const tabela =
        document.getElementById("tabelaprodutos").querySelector("tbody");
    produtos.forEach(produto => {
        const linha = `
    <tr>
        <td>${produto.id}</td>
        <td>${produto.Nome}</td>
        <td>${produto.Quantidade}</td>
        <td>${produto.Vencimento}</td>
    </tr>
`;
});
function carregarProdutos() {
    const tabelaProdutos = document.getElementById("tabelaProdutos").getElementsByTagName('tbody')[0];
    tabelaProdutos.innerHTML = '';

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.forEach((produto, index) => {
        const row = tabelaProdutos.insertRow();
        row.insertCell(0).textContent = produto.id;
        row.insertCell(1).textContent = produto.Nome;
        row.insertCell(2).textContent = produto.Quantidade;
        row.insertCell(3).textContent = produto.Vencimento;

        const acoesCell = row.insertCell(4);
        
        const editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.classList.add("editar");
        editar.onclick = () => editarProduto(index);
        
        const apagar = document.createElement("button");
        apagar.textContent = "Apagar";
        apagar.classList.add("apagar");
        apagar.onclick = () => apagarProduto(index);

        acoesCell.appendChild(editarBtn);
        acoesCell.appendChild(apagarBtn);
    });
}
function editarProduto(index) {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[index];
    alert('Editando: ' + produto.Nome);
}

function apagarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos)); 
    carregarProdutos();
}
window.onload = carregarProdutos;
