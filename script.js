let numeros = [];

numeros[0] = prompt();
numeros[1] = prompt();
numeros[2] = prompt();
numeros[3] = prompt(); // O usuário digita o valor numérico 
numeros[4] = 90; // somente o progamador saberá o valor numérico 

//lendo o vetor 
for (let x = 0; x < numeros.length; x++ ){
    console.log (numeros [x]);// imprimir a posição do vetor 
}

console.log(numeros.length);
//====================== Outras informaçoes importantes em diferentes casos =========================================
let capitais = [
    "Palmas",
    "São Paulo"
];

//Adicionar um  valor no final do array (vetor)
capitais.push("Manaus");

// adicionar valor no inicio do vetor e retorna o novo tamanho do vetor 
console.log(capitais.unshift("Curitiba")); 

//Remove o elemento do inicio do vetor. Retorna o elemento removido 
capitais.shift();

//Remove o ultimo elemento do vetor 
capitais.pop();

//Alterar o conteúdo do vetor escolhido,remover o elemento(s), posição inicial 
//Elemento a ser inserido 
//O 0 é o indice, o 1 é a qtd de elementos e o novo elemento "toquio"
capitais.splice(0, 1, "Tokyo");

for (let x = 0; x < capitais.length; x++ ){
     console.log (capitais [x]);// imprimir a posição do vetor 
 }

console.log("======================================================");


//Retornar um intervalo do vetor
//Posição inicial e Posição final
//obs: não altera o vetor original
console.log(capitais.slice(0, 2));

console.log("======================================================");
let numeros= [
    "80",
    "2",
    "10",
    "1"
];

//Ordenar o vetor em ordem crescente
numeros.sort( (a, b) => a- b );
console.log(numeros);

let sistemas= [
    "Android",
    "iOs",
    "macOS",
    "Linux",
    "Windows"
];

//inverte os elementos de um array (vetor)
sistemas.reverse();
console.log(sistemas);



