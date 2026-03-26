import Sorvete  from './models/Sorvete.js'
import Receita  from './models/Receita.js'
import Custo    from './models/Custo.js'

const tonelada    = 1           
const tamanhoPote = 'medio'   
const diametro    = 11          
const altura      = 10        

const sorvete = new Sorvete(diametro, altura)
const volume       = sorvete.calcularVolume()
const pesoUnitario = sorvete.getPesoUnitario()

const receita       = new Receita(450, 150, 100, 170, 30, tonelada, tamanhoPote)
const ingredientes  = receita.escalarReceita()
const totalPotes    = receita.calcularPotes()


const qtdeParaCusto = {
    leite:   ingredientes.leite,
    creme:   ingredientes.creme,   
    acucar:  ingredientes.acucar,
    frutasV: ingredientes.polpa,                       
    acidoC:  ingredientes.acidoCitrico,
}

const custo = new Custo()
custo.calcularCustoTotal(qtdeParaCusto)
custo.calcularCustoPote(totalPotes)

console.log('=== GELATERIA GEOMÉTRICA — PRODUÇÃO ===\n')
console.log(`Tonelagem:          ${tonelada}t`)
console.log(`Tamanho do pote:    ${tamanhoPote}`)
console.log(`Volume do pote:     ${volume.toFixed(2)} cm³`)
console.log(`Peso unitário:      ${pesoUnitario.toFixed(2)} g`)
console.log(`Total de potes:     ${totalPotes}`)
console.log('\n--- Ingredientes escalados (g) ---')
console.log(`Leite:              ${ingredientes.leite} g`)
console.log(`Creme:              ${ingredientes.creme} g`)
console.log(`Açúcar:             ${ingredientes.acucar} g`)
console.log(`Polpa:              ${ingredientes.polpa} g`)
console.log(`Ácido Cítrico:      ${ingredientes.acidoCitrico} g`)
console.log('\n--- Custos ---')
console.log(`Custo total:        R$ ${custo.custoTotal}`)
console.log(`Custo por pote:     R$ ${custo.custoPorPote}`)