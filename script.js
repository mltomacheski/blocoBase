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

for (let x = 0; x < capitais.length; x++ ){
     console.log (capitais [x]);// imprimir a posição do vetor 
 }



