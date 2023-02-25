let listaDeItens = [];

const form = document.querySelector("#form-itens");
const itensInput = document.querySelector("#receber-item");

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  salvarItem();
})

function salvarItem(){
  const comprasItem = itensInput.value;
  const checarDuplicado = listaDeItens.some( (elemento) => (elemento.valor).toUpperCase() === (comprasItem).toUpperCase())
  
  if(checarDuplicado){
   alert('Item já existe') 
  }else{
    listaDeItens.push( {
      valor: comprasItem
    })
    
    console.log(listaDeItens);
  }
}