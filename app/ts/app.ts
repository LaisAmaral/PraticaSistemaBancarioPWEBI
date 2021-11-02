let contaController = new ContaController();

contaController.listar();

const clientes = new Clientes();
const c1 = new Conta('1', 50);
const p1 = new Poupanca('2', 50);
const cb1 = new ContaBonificada('3', 0);
const cl1 = new Cliente('Lais','000.000.000-00',c1);

let listarCli = Object.assign([], clientes.listar());
clientes.inserir(cl1);
let inserir = Object.assign([], clientes.listar());
clientes.remover(cl1.cpf);
let remover = Object.assign([], clientes.listar());
console.log(listarCli, inserir, remover)

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);