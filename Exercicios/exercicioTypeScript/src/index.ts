import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Produto from "./Produto";
import Venda from "./Venda";

const endereco1 = new Endereco("Rua Flamengo", 123, "Guarapuava", "PR");
const endereco2 = new Endereco("Rua Corinthians", 456, "Guarapuava", "PR");

const telefone1 = new Telefone("42", 911112222, "celular");
const telefone2 = new Telefone("42", 933334444, "fixo");
const telefone3 = new Telefone("42", 955556666, "celular");
const telefone4 = new Telefone("42", 977778888, "fixo");

const cliente1 = new Cliente("Eduardo Larson", 12345678900, 12122005, "Masculino", endereco1, [telefone1, telefone2]);
const cliente2 = new Cliente("Thiago Ceron", 12332112312, 10022005, "Masculino", endereco2, [telefone3, telefone4]);

const produto1 = new Produto(1, "Camiseta Flamengo", 450);
const produto2 = new Produto(2, "Chuteira Nike Mercurial", 600);
const produto3 = new Produto(1, "Camiseta Corinthians", 400);
const produto4 = new Produto(2, "Boné Corinthians", 100);

const venda1 = new Venda(1001, 28032025, cliente1, [produto1, produto2]);
const venda2 = new Venda(1001, 28032025, cliente2, [produto3, produto4]);

console.log("Cliente:", cliente1);
console.log("Endereço:", cliente1.endereco);
console.log("Telefones:", cliente1.telefone);
console.log("Produtos comprados:", venda1.produto);
console.log("Total da venda:", venda1.calcularTotal());

console.log("Cliente:", cliente2);
console.log("Endereço:", cliente2.endereco);
console.log("Telefones:", cliente2.telefone);
console.log("Produtos comprados:", venda2.produto);
console.log("Total da venda:", venda2.calcularTotal());
