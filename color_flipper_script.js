//Constante Colors está armazenando as cores que irão aparecer ao clicar no botão
const colors = ["red", "green", "blue", "yellow", "black", "white"]

//Constante btn e corAtual estão selecionando o botão e o span no HTML
const btn =  document.getElementById('btn')
const corAtual = document.querySelector(".cor-atual")


//Adicionei um Event Listener no botão para reconhecer o click
btn.addEventListener('click', function(){

    //Const numeroCor está referenciando os cores declaradas no colors (0 a 4)
    const numeroCor = gerarNumeroCor();
    console.log(numeroCor);

    //Troca a cor de fundo de acordo com a const colors 
    document.body.style.backgroundColor = colors[numeroCor];
    corAtual.textContent = colors[numeroCor]
})



//Gera um número aleatório para a função que denomina a cor
function gerarNumeroCor (){
    return Math.floor(Math.random() * colors.length);

}