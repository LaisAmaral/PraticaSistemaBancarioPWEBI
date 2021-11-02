class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Clientes();
    }
    inserirDependente(cliente) {
        this._dependentes.inserir(cliente);
    }
    removerDependente(cpf) {
        this._dependentes.remover(cpf);
    }
    listarDependentes() {
        return this._dependentes.listar();
    }
}
