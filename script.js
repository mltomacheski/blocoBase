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