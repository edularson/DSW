//  LET é para variável local

//  VAR é para variável global

/* Tipos de Dados:
   - number
   - string
   - boolean
   - any     ------- esse tipo de dado possibilita usar todos os três tipos de dados acima

   Array
   - let list : number[ ] = [2, 3, 5, 7]
   - var list : Array<number> = [2, 3, 5, 7, 11]

   ENUM
   - Serve para declarar um conjunto de valores nomeados e pré-definidos
        enum Sexo {
        MASCULINO,
        FEMININO,
        INDEFINIDO,
        }

    NULL e UNDEFINED é para algo indefinido 

    VOID é para retorno de funções
    function minhaFuncao() : void {
    console.log("Minha Função);
    }

const disciplina : string = "Desenvolvimento de Sistemas Web";
console.log(disciplina);

var a = 6;
var b = 5;
if (a === 6) {
    let a = 5; // este mantem o resultado interno ao bloco 
    var b = 3; // em contrapartida, este declara o balor para funçãao, saindo do bloco
    console.log(a); // resultado final = 5
    console.log(b); // resultado final = 3

}

console.log(a); // resultado final = 6
console.log(b); // resultado final = 3

function minhaFuncao(): void {
    console.log("Minha Função");
}

minhaFuncao();

function soma(n1: number, n2: number): number {
    return n1+n2;
}

console.log("O Resultado da soma é: " + soma(5,2));

function sub(n1: number, n2: number): number {
    return n1 - n2;
}

console.log("O Resultado da subtrção é: " + sub(5,2));

function multi(n1: number, n2: number): number {
    return n1 * n2;
}

console.log("O Resultado da multiplicação é: " + multi(5,2));

function div(n1: number, n2: number): number {
    return n1+n2;
}

console.log("O Resultado da divisão é: " + div(5,2));



        Orientação a objetos:

        class exemplo {
            // atributos
            // construtor
            // getter e setter
            // outros métodos
            }



        Encapsulamento:
        
        export default class ClassExemplo {
            private _nome: string;
        
        constructor (nome : string){
            this._nome = nome;
            }
        
        get nome() : string {
            returnn this._nome
            }

        set nome(nome : string) {
            this._nome = nome;
            }
        }


import Pessoa from "./pessoa";

var p1 : Pessoa = new Pessoa("Eduardo Larson", 12122005);

var p2 : Pessoa = new Pessoa("Thiago Ceron", 19022005);

console.log("Nome: " + p1.nome);
console.log("Data de Nascimento: " + p1.dataNascimento);


*/