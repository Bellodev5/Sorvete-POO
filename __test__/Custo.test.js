import Custo from "../models/Custo";

describe('Testes da regra de negócio', () => {
    test('Deve iniciar com os preços padrão', () => {
        const custoPadrao = new Custo()

        expect(custoPadrao.leite).toBe(4.50)
        expect(custoPadrao.acucar).toBe(4.89)
        expect(custoPadrao.creme).toBe(12.90)
        expect(custoPadrao.frutasV).toBe(35.00)
        expect(custoPadrao.acidoC).toBe(18.00)
    })

    test('Deve calcular o custo dos ingredientes', () => {
        const custo = new Custo()

        const ingredientes = {
            leite: 1000000,
            acucar: 1000000,
            creme: 1000000,
            frutasV: 1000000,
            acidoC: 1000000
        }

        custo.calcularCustoTotal(ingredientes)

        expect(custo.precoIngredientes.leite).toBe(4500.00)   
        expect(custo.precoIngredientes.acucar).toBe(4890.00)  
        expect(custo.precoIngredientes.creme).toBe(12900.00)     
        expect(custo.precoIngredientes.frutasV).toBe(35000.00)
        expect(custo.precoIngredientes.acidoC).toBe(18000.00) 
    })

    test('Deve somar o custo total da produção', () => {
        const custo = new Custo()

        const ingredientes = {
            leite: 1000000,  
            acucar: 1000000,  
            creme: 1000000,       
            frutasV: 1000000, 
            acidoC: 1000000  
        }

        custo.calcularCustoTotal(ingredientes)

        const somaEsperada = Number((4500 + 4890 + 12900 + 35000 + 18000).toFixed(2))

        expect(custo.custoTotal).toBe(somaEsperada)
    })
    
    test('Deve calcular custo por pote corretamente', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 1000000,
            acucar: 1000000,
            creme: 1000000,
            frutasV: 1000000,
            acidoC: 1000000
        }

        custo.calcularCustoTotal(ingredientesMock)

        const custoPorPote = custo.calcularCustoPote(100)

        const esperado = Number((custo.custoTotal / 100).toFixed(2))

        expect(custoPorPote).toBe(esperado)
        expect(custo.custoPorPote).toBe(esperado)
        expect(custo.quantidadePotes).toBe(100)
    })

    test('Deve inicializar atributos corretamente', () => {
        const custo = new Custo()

        expect(custo.precoIngredientes).toEqual({})
        expect(custo.custoTotal).toBe(0)
        expect(custo.custoPorPote).toBe(0)
        expect(custo.quantidadePotes).toBe(0)
    })

    test('Deve permitir preços customizados no construtor', () => {
        const custo = new Custo(10, 10, 1, 50, 20)

        const ingredientesMock = {
            leite: 1000000,
            acucar: 0,
            creme: 0,
            frutasV: 1000000,
            acidoC: 0
        }

        custo.calcularCustoTotal(ingredientesMock)

        expect(custo.precoIngredientes.leite).toBe(10000.00) 
        expect(custo.precoIngredientes.frutasV).toBe(50000.00) 
    })
})