//Constante Colors está armazenando as cores que irão aparecer ao clicar no botão
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"]

//Constante btn e corAtual estão selecionando o botão e o span no HTML
const btn =  document.getElementById('btn')
const corAtual = document.querySelector(".cor-atual")

//Adicionei um Event Listener no botão para reconhecer o click
btn.addEventListener('click', function(){
    
    //Var com # para formar hex cor
    let hexCor = '#';

    //Loop pra pegar 6 num da func gerarHexCor    
    for(let i= 0; i<6 ; i++ ){
        hexCor += hex[gerarHexCor()]
    }

    //Troca a cor de fundo de acordo com a const colors 
    document.body.style.backgroundColor = hexCor;
    corAtual.textContent = hexCor;
})

//Gera um número aleatório para o loop 
function gerarHexCor (){
    return Math.floor(Math.random()* hex.length)
}