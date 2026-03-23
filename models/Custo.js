export default class Custo {
    constructor(
        leite  = 4.50,
        acucar = 4.89,
        creme = 12.90,
        frutasV = 35.00,
        acidoC  = 18.00
    ) {
        this.leite   = leite
        this.acucar  = acucar
        this.creme   = creme
        this.frutasV = frutasV
        this.acidoC  = acidoC

        this.precoIngredientes = {}
        this.custoTotal        = 0
        this.custoPorPote      = 0
        this.quantidadePotes   = 0
    }

    calcularCustoTotal(qtdeIngredientes) {
        this.precoIngredientes = {
            leite:   Number(((qtdeIngredientes.leite   / 1000) * this.leite).toFixed(2)),
            acucar:  Number(((qtdeIngredientes.acucar  / 1000) * this.acucar).toFixed(2)),
            creme:   Number(((qtdeIngredientes.creme   / 1000) * this.creme).toFixed(2)),
            frutasV: Number(((qtdeIngredientes.frutasV / 1000) * this.frutasV).toFixed(2)),
            acidoC:  Number(((qtdeIngredientes.acidoC  / 1000) * this.acidoC).toFixed(2)), 
        }

        const soma =
            this.precoIngredientes.leite   +
            this.precoIngredientes.acucar  +
            this.precoIngredientes.creme   +
            this.precoIngredientes.frutasV +
            this.precoIngredientes.acidoC

        this.custoTotal = Number(soma.toFixed(2))  
        return this.custoTotal
    }

    calcularCustoPote(qtdePotes) {                         
        this.quantidadePotes = qtdePotes
        this.custoPorPote = Number((this.custoTotal / this.quantidadePotes).toFixed(2))
        return this.custoPorPote
    }
}
