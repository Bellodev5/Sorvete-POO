export default class Receita{
    constructor(leite = 450, creme = 150, acucar = 100, polpa = 170, acidoCitrico = 30, tonelada = 1, tamanhoPote){
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.polpa = polpa
        this.acidoCitrico = acidoCitrico

        this.tonelada = tonelada
        this.tamanhoPote = tamanhoPote

        // Massa base da receita de 900g
        this.massaTotal = this.leite + this.creme + this.acucar + this.polpa + this.acidoCitrico

        // Atributo do resultado dos cálculos
        this.receita = {}
        this.totalPotes = 0
    }

    escalarReceita(){
        const fatorEscala = this.tonelada * 1000000 / this.massaTotal

        this.receita = {
            leite: Number((this.leite * fatorEscala).toFixed(2)),
            creme: Number((this.creme * fatorEscala).toFixed(2)),
            acucar: Number((this.acucar * fatorEscala).toFixed(2)),
            polpa: Number((this.polpa * fatorEscala).toFixed(2)),
            acidoCitrico: Number((this.acidoCitrico * fatorEscala).toFixed(2))
        }

        return this.receita
    }

    calcularPotes(){
        switch(this.tamanhoPote) {
            case 'pequeno':
                this.totalPotes = this.tonelada * 1000000 / 400
                return Math.floor(this.totalPotes)

            case 'medio':
                this.totalPotes = this.tonelada * 1000000 / 900
                return Math.floor(this.totalPotes)

            case 'grande':
                this.totalPotes = this.tonelada * 1000000 / 1700
                return Math.floor(this.totalPotes)
        }
    }
}