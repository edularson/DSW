import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda {
    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produto : Produto[] = [];

    constructor(codigo : number, data : number, cliente : Cliente, produto : Produto[] = []){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produto = produto;
    }

    get codigo() : number{
        return this._codigo;
    }
    set codigo(codigo : number){
        this._codigo = codigo;
    }

    get data() : number{
        return this._data;
    }
    set data(data : number){
        this._data = data;
    }

    get cliente() : Cliente{
        return this._cliente;
    }
    set cliente( cliente : Cliente){
        this._cliente = cliente;
    }

    get produto() : Produto[]{
        return this._produto;
    }
    set produto(produto : Produto[]){
        this._produto = produto;
    }

    calcularTotal(): number {
        return this._produto.reduce((total, produto) => total + produto.valor, 0);
      }
}