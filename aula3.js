/* let frutas = ["Laranja", "Banana", "Abacate", "Manga", "Maçã", "Abacaxi", "Uva", "Tangerina", "Acerola"];
frutas.push("Ameixa") */
/* console.log(frutas.length);
console.log(frutas[9]); */
/* let i;

let frutasCrescente = frutas.sort();

for(i = 0; i < frutas.length; i++){
   console.log(frutasCrescente[i]); 
} */


/*  let vetorExemplo = [];
 console.log(vetorExemplo[0]);

 vetorExemplo[0] = 55; //INTEGER
 vetorExemplo[1] = "Admilson"; //STRING
 vetorExemplo[2] = 500.25; //DOUBLE
 vetorExemplo.push(true);

 console.log(vetorExemplo[3]); */

/*  let mediaAluno = [8.7, 7.2, 4.7, 3.5, 8.9, 10.0, 7.1, 2.9, 9.5, 10.0];
 let mediaTurma = 0;

for(let i = 0; i < mediaAluno.length; i++){
    mediaTurma = mediaTurma + mediaAluno[i];
}
console.log(mediaTurma);

mediaTurma = mediaTurma / mediaAluno.length;

console.log(mediaTurma); */

/* let vetorCompleto = [10,20,30,40,50,7,15,93,60,102,178,1363,25,14,15];
let par = 0, impar = 0;
for(let i = 0; i< vetorCompleto.length; i++){
    if(vetorCompleto[i]%2 == 0){
        par = par + 1;
    }else{
        impar++;
    }
}
console.log("O total de pares é: "+par);
console.log("O total de ímpares é: "+impar); */

let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let par = 0; let impar = 0; let i;
for(i = 0; i < valores.length; i++){
    if(valores[i] % 2 == 0){
        par = par + 1;
        
    }

    else{

        impar = impar + 1;
        
    }
}
console.log(par + " números pares e " + impar + " números impares.");