let num1, num2, soma, mult, sub, div;
num1 = 10;
num2 = 8;
soma = num1 + num2;
sub = num1 - num2;
mult = num1 * num2;
div = num1 / num2;

/*console.log("A soma dos números é: "+soma);
console.log("A subtração dos números é: "+sub);
console.log("A multiplicação dos números é: "+mult);
console.log("A divisão dos números é: "+div);*/

//SENDO A = 3, B = 7 E C = 4. INFORME SE AS EXPRESSÕES SÃO VERDADEIRAS OU FALSAS
//a) (A+C)>B
//b) B >= A+2
//c) C = (B-A)
//d) (B+A) <= C

/* let a=3, b=7, c=4;

console.log((a+c)>b); //FALSE
console.log(b>=a+2); //TRUE
console.log(c==(b-a)); //TRUE
console.log((b+a)<=c); //FALSE

console.log((a+c)>b && b>=a+2) */

let idade = 20;
let acesso = '';

/* if(idade < 16){
    acesso = 'proibido'; 
}else if (idade>=16 && idade <=18){
    acesso = 'permitido somente quando acompanhado por um maior de idade'
}else{
    acesso = 'permitido';
}

console.log(acesso); */

//IF TRADICIONAL
/* if(idade>=18){
    acesso = 'permitido';
}else{
    acesso='negado';
} */

//IF TERNÁRIO
(idade >=18) ? acesso='permitido' : acesso='negado';
/* console.log(acesso); */

let fruta = "limão";

switch(fruta){ //ESCOLHA
    case "mamão":
        console.log("A fruta escolhida foi o mamão");
        break;
    case "abacaxi":
        console.log("A fruta escolhida foi o abacaxi");
        break;
    case "limão":
        console.log("A fruta escolhida foi o limão");
        break;
    default:
        console.log("A fruta escolhida não está na lista");
        break;            
}

/* Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual,
calcule e mostre:
a) a idade dessa pessoa.
b) quantos anos ela terá em 2030.
 */

 let anoNascimento = 1990, anoAtual = 2020;

 console.log("Minha idade atual é "+(anoAtual - anoNascimento)+" anos");
 console.log("Minha idade em 2030 é "+(2030 - anoNascimento)+" anos");