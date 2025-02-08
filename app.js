//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; // Array onde serão armazenados os nomes por isso está vazio


function adicionarAmigo() {
    let input = document.getElementById('amigo').value; // Variável que acessa o valor do input, ou seja, o que o usuário digitar


    if (input === '') { 
        alert('Por favor, insira um nome'); // Se o input estiver vazio e o usuário clicar em adicionar amigo esse alert aparece
    } else {
        nomes.push(input); // se não, o que for digitado é adicionado ao array nomes 
        listarAmigos(); // faz com que a função seja executada depois que o que for digitado é adicionado ao array nomes 
        document.getElementById('amigo').value = ''; // torna o input vazio depois que um nome é digitado


    };


};
function listarAmigos() {

    let lista = document.getElementById('listaAmigos'); // Variável que acessa a tag ul do HTML
    lista.innerHTML = ''; // a tag se torna vazia 
    for (let i = 0; i < nomes.length; i++) { // 1- Cria uma variável de inicialização | 2- Condição (se a variável for menor que o tamanho do array nomes) | 3- É adicionado mais 1
        let li= document.createElement('li'); //Variável que cria a tag li dentro do HTML
        li.textContent = nomes[i]; // Armazena as informações presentes no array nomes dentro da tag li
        lista.appendChild(li); // Coloca a tag li dentro da ul lista


    };
    


};
function sortearAmigo(){
    let resultado = document.getElementById('resultado'); // Variável que acessa a teg ul com o id chamado resultado
    let amigoAleatorio = nomes[Math.floor(Math.random() * nomes.length)]; // Variável que guarda um amigo sorteado do array de forma aleatoria usando o Math.floor e Math.random
    resultado.innerHTML = `O amigo(a) sorteado(a) foi ${amigoAleatorio}`; // Responsavel por aparecer a mensagem de quem foi o sorteado
};

