export default class Receita {
    constructor(leite = 450, creme = 150, acucar = 100, polpa = 170, acidoCitrico = 30, tamanhoPote) {
        this.leite       = leite
        this.creme       = creme
        this.acucar      = acucar
        this.polpa       = polpa
        this.acidoCitrico = acidoCitrico
        this.tamanhoPote = tamanhoPote
        this.massaTotal  = leite + creme + acucar + polpa + acidoCitrico
    }

    escalarReceita(toneladas) {
        const fator = (toneladas * 1_000_000) / this.massaTotal
        return {
            leite:        Number((this.leite        * fator).toFixed(2)),
            creme:        Number((this.creme        * fator).toFixed(2)),
            acucar:       Number((this.acucar       * fator).toFixed(2)),
            polpa:        Number((this.polpa        * fator).toFixed(2)),
            acidoCitrico: Number((this.acidoCitrico * fator).toFixed(2)),
        }
    }

    calcularPotes(toneladas) {
        const pesoPote = { pequeno: 400, medio: 900, grande: 1700 }
        return Math.floor((toneladas * 1_000_000) / pesoPote[this.tamanhoPote])
    }
}