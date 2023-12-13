export class Pessoa {

    // atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    // método construtor
    public constructor (
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number)

    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
     
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
    }

    // métodos GETTERS and SETTERS
    public getNome() { // get = recuperar
        return this.nome;
    }

    public setNome(_nome: string){ //set = atribuir
        this.nome = _nome;
    }

    public getCPF() {
        return this.cpf;
    }

    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }
}