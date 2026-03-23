import Receita from '../models/Receita.js'

describe('Testes unitários da classe Receita', () => {

    test('Teste do cálculo de quantidade de ingredientes para 1 tonelada de sorvete', () => {
        // Criando receita padrão 
        const receitaPadrao = new Receita()

        // Calculando quantidade de ingredientes para 1 tonelada (padrão)
        const proporcao = receitaPadrao.escalarReceita()

        // Validando
        // Teste da soma da massa total
        expect(receitaPadrao.massaTotal).toBe(900)

        // Teste da quantidade de ingredientes
        expect(proporcao.leite).toBe(500000.00)
        expect(proporcao.creme).toBe(166666.67)
        expect(proporcao.acucar).toBe(111111.11)
        expect(proporcao.polpa).toBe(188888.89)
        expect(proporcao.acidoCitrico).toBe(33333.33)
    })

    test('Teste do cálculo de quantidade de ingredientes para 12 toneladas de sorvete', () => {
        // Criando receita padrão 
        const receita12 = new Receita(450, 150, 100, 170, 30, 12)

        // Calculando quantidade de ingredientes para 1 tonelada (padrão)
        const proporcao = receita12.escalarReceita()

        // Validando
        // Teste da quantidade de ingredientes
        expect(proporcao.leite).toBe(6000000.00)
        expect(proporcao.creme).toBe(2000000)
        expect(proporcao.acucar).toBe(1333333.33)
        expect(proporcao.polpa).toBe(2266666.67)
        expect(proporcao.acidoCitrico).toBe(400000)
    })

    test('Teste do cálculo de quantidade de potes pequenos totais com 1 tonelada de sorvete', () => {
        // Criando receita
        const receitaPequeno = new Receita(450, 150, 100, 170, 30, 1, 'pequeno')

        // Calculando quantidade
        const qtPotes = receitaPequeno.calcularPotes()

        // Validando
        expect(qtPotes).toBe(2500)
    })
    
    test('Teste do cálculo de quantidade de potes médios totais com 5 tonelada de sorvete', () => {
        // Criando receita
        const receitaMedio = new Receita(450, 150, 100, 170, 30, 5, 'medio')
        
        // Calculando quantidade
        const qtPotes = receitaMedio.calcularPotes()
        
        // Validando
        expect(qtPotes).toBe(5555)
    })
    
    test('Teste do cálculo de quantidade de potes grandes totais com 12 tonelada de sorvete', () => {
        // Criando receita
        const receitaGrande = new Receita(450, 150, 100, 170, 30, 12, 'grande')

        // Calculando quantidade
        const qtPotes = receitaGrande.calcularPotes()

        // Validando
        expect(qtPotes).toBe(7058)
    })
})