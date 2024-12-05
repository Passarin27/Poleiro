function geraridUnico() {
return 'produtos'+  
Date.now()+'-' +
Math.floor(math.random() *
1000);
}
document.getElementById('gerandor de id').addEventListener('submit',function(event){
    Event.preventdefault();

const idUnico=geraridUnico();
console.log("ID gerado",idUnico);
alert("Produto cadastrado com Id:"=idUnico)
});