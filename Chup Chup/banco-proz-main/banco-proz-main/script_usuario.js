document.getElementById("Enviar").addEventListener ("click",function() {
    const nome=document.getElementById("nome").value;
    const Quantidade=getElementById("Quantidade").value;
    const Descrição=getElementById("Descrição").value;
    if(!nome||!Quantidade||!Descrição){
        alert("Preencha todos os campos!");
        return;
    }
    const tabela =
    document.getElementById("tabelaprodutos").querySelector("tbody");
    const linha = `
    <tr>
        <td>${usuario.Nome}</td>
        <td>${usuario.Quantidade}</td>
        <td>${usuario.Descrição}</td>
    </tr>
`
 tabela.appendChild(novaLinha);
 document.getElementById("cadastroForm").requestFullscreen();
});

