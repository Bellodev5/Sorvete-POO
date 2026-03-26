import Sorvete from "./models/Sorvete.js"
import Receita from "./models/Receita.js"
import Custo from "./models/Custo.js"

const botaoCalcular = document.getElementById('btn-calcular')
const botaoLimpar = document.getElementById('btn-limpar')
const areaResultado = document.getElementById('resposta')
const selectTamanho = document.getElementById('tamanho')
const botaoEntrar = document.getElementById('btn-entrar')
botaoEntrar.addEventListener('click', () => {
    document.getElementById('splash').style.display = 'none'
    const app = document.getElementById('app')
    app.style.display = 'flex'
})
selectTamanho.addEventListener('change', () => {
    if (selectTamanho.value !== 'custom') {
        document.getElementById('diametro').value = selectTamanho.value
    } else {
        document.getElementById('diametro').value = ''
        document.getElementById('diametro').focus()
    }
})

botaoCalcular.addEventListener('click', () => {

    const diametro    = Number(document.getElementById('diametro').value)
    const altura      = Number(document.getElementById('altura').value)
    const tamanhoPote = document.getElementById('tamanho').value
    const toneladas   = Number(document.getElementById('meta-producao').value)

    if (!diametro || !altura) {
        areaResultado.innerHTML = `
            <p class="erro">Preencha todos os campos antes de calcular.</p>
        `
        return
    }

    const sorvete  = new Sorvete(diametro, altura)
    const pesoPote = sorvete.getPesoUnitario()

    const receita          = new Receita(450, 150, 100, 170, 30, tamanhoPote)
    const qtdIngredientes  = receita.escalarReceita(toneladas)
    const qtdPotes         = receita.calcularPotes(toneladas)

    const custo = new Custo()
    custo.calcularCustoTotal(qtdIngredientes)
    const precosIngredientes = custo.precoIngredientes
    const custoPorPote       = (custo.custoTotal / qtdPotes).toFixed(2)

    areaResultado.innerHTML = `
        <h3>Relatório: ${toneladas} Tonelada${toneladas > 1 ? 's' : ''} de Sorvete</h3>
        <p><strong>Tamanho do pote:</strong> ${tamanhoPote}</p>
        <p><strong>Peso unitário do pote:</strong> ${pesoPote.toFixed(2)} g</p>
        <p><strong>Rendimento:</strong> ${qtdPotes} potes</p>
        <p><strong>Custo total de produção:</strong> R$ ${custo.custoTotal}</p>
        <p><strong>Custo por pote:</strong> R$ ${custoPorPote}</p>
        <h4>Tabela de Ingredientes e Custos</h4>
        <table>
            <thead>
                <tr><th>Ingrediente</th><th>Quantidade</th><th>Custo (R$)</th></tr>
            </thead>
            <tbody>
                <tr><td>Leite</td><td>${(qtdIngredientes.leite / 1000).toFixed(2)} L</td><td>R$ ${precosIngredientes.leite}</td></tr>
                <tr><td>Creme de Leite</td><td>${(qtdIngredientes.creme / 1000).toFixed(2)} L</td><td>R$ ${precosIngredientes.creme}</td></tr>
                <tr><td>Açúcar</td><td>${(qtdIngredientes.acucar / 1000).toFixed(2)} kg</td><td>R$ ${precosIngredientes.acucar}</td></tr>
                <tr><td>Polpa de Fruta</td><td>${(qtdIngredientes.polpa / 1000).toFixed(2)} kg</td><td>R$ ${precosIngredientes.frutasV}</td></tr>
                <tr><td>Ácido Cítrico</td><td>${(qtdIngredientes.acidoCitrico / 1000).toFixed(2)} kg</td><td>R$ ${precosIngredientes.acidoC}</td></tr>
            </tbody>
        </table>
    `
})

botaoLimpar.addEventListener('click', () => {
    document.getElementById('tamanho').value = "medio"
    document.getElementById('diametro').value = ''
    document.getElementById('altura').value = ''

    areaResultado.innerHTML = "<p>Insira os dados do pote de sorvete e " +
        "clique em 'Calcular Produção' para ver o rendimento, ingredientes e custos.</p>"
})