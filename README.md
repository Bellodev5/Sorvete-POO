# 🍦 Sorvete-POO — Calculadora de Produção Industrial de Sorvete

Sistema de **Programação Orientada a Objetos (POO)** em JavaScript que simula o planejamento de produção de sorvetes em escala industrial. Dado o diâmetro e a altura de um pote, a meta de produção em toneladas e o tamanho do pote, o sistema calcula volume, peso unitário, rendimento, ingredientes necessários e custo total.



Sistema em Produção:[sorvete-poo.vercel.app](https://sorvete-poo.vercel.app/) |
Gestão do Projeto: [Trello](https://trello.com/invite/b/69ea9e0ac65e7b13735ad561/ATTI61b05043efae40efd0c2b18a5636e3d03C43C9F7/sorvetes)
---
## 📁 Estrutura do Projeto

```
Sorvete-POO/
├── index.html           # Interface web (Splash + App)
├── style.css            # Estilos da aplicação
├── progSorvete.js       # Ponto de entrada para execução via Node.js (CLI)
├── index.js             # Lógica de interação com a UI (DOM)
├── models/
│   ├── Sorvete.js       # Classe: volume e peso do pote
│   ├── Receita.js       # Classe: escalonamento de ingredientes e rendimento
│   └── Custo.js         # Classe: cálculo de custos de produção
├── UML/
│   ├── classeSorvete.png
│   ├── classeReceita.png
│   ├── classeCusto.png
│   └── classe_UML.png
└── __tests__/
    ├── Sorvete.test.js
    ├── Receita.test.js
    └── Custo.test.js
```

---

## 🧱 Classes e Regras de Negócio

### `Sorvete`
Representa as propriedades físicas de um pote cilíndrico.

| Atributo    | Descrição                              |
|-------------|----------------------------------------|
| `raio`      | Metade do diâmetro informado (cm)      |
| `altura`    | Altura do pote (cm)                    |
| `densidade` | Constante: `0.60 g/cm³`               |

| Método             | Retorno                                  |
|--------------------|------------------------------------------|
| `calcularVolume()` | Volume do cilindro em cm³                |
| `getPesoUnitario()`| Peso do pote em gramas (`volume × 0.60`) |

---

### `Receita`
Escala os ingredientes de uma receita base de `900 g` para qualquer tonelagem.

**Receita base padrão:**

| Ingrediente   | Quantidade (g) |
|---------------|---------------|
| Leite         | 450           |
| Creme de leite| 150           |
| Açúcar        | 100           |
| Polpa de fruta| 170           |
| Ácido cítrico | 30            |

| Método                       | Retorno                                        |
|------------------------------|------------------------------------------------|
| `escalarReceita(toneladas)`  | Objeto com ingredientes em gramas              |
| `calcularPotes(toneladas)`   | Número inteiro de potes pelo peso por tamanho  |

**Pesos por tamanho de pote:**

| Tamanho  | Peso (g) |
|----------|----------|
| Pequeno  | 400      |
| Médio    | 900      |
| Grande   | 1.700    |

---

### `Custo`
Calcula o custo de produção com base nas quantidades de ingredientes.

**Preços padrão (por kg):**

| Ingrediente   | Preço (R$/kg) |
|---------------|--------------|
| Leite         | R$ 4,50      |
| Açúcar        | R$ 4,89      |
| Creme de leite| R$ 12,90     |
| Polpa de fruta| R$ 35,00     |
| Ácido cítrico | R$ 18,00     |

> Preços customizáveis via construtor.

| Método                         | Retorno                             |
|--------------------------------|-------------------------------------|
| `calcularCustoTotal(qtdes)`    | Custo total em R$ e por ingrediente |
| `calcularCustoPote(qtdePotes)` | Custo unitário por pote em R$       |

---

## 🖥️ Como Executar

### Interface Web

Abra o arquivo `index.html` diretamente no navegador (ou sirva via Live Server / servidor local):

```bash
# Com npx serve, por exemplo:
npx serve .
```

Preencha os campos de diâmetro, altura, tamanho do pote e meta de produção, então clique em **"Calcular Produção"**.

### Via Node.js (CLI)

```bash
node progSorvete.js
```

Os parâmetros (diâmetro, altura, tonelagem, tamanho do pote) são definidos diretamente nas variáveis no topo do arquivo `progSorvete.js`.

Exemplo de saída:

```
=== GELATERIA GEOMÉTRICA — PRODUÇÃO ===

Tonelagem:          1t
Tamanho do pote:    medio
Volume do pote:     950.33 cm³
Peso unitário:      570.20 g
Total de potes:     1111

--- Ingredientes escalados (g) ---
Leite:              500000.00 g
Creme:              166666.67 g
Açúcar:             111111.11 g
Polpa:              188888.89 g
Ácido Cítrico:      33333.33 g

--- Custos ---
Custo total:        R$ 13895.84
Custo por pote:     R$ 12.51
```

---

## ✅ Testes

O projeto usa **Jest** para testes unitários das três classes.

### Instalar dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

### Cobertura dos testes

| Classe    | Casos testados                                                             |
|-----------|----------------------------------------------------------------------------|
| `Sorvete` | Volume e peso de potes médio e pequeno; validação de raio                 |
| `Receita` | Escalonamento para 1 e 12 toneladas; rendimento em potes P, M e G         |
| `Custo`   | Preços padrão e customizados; custo total, por ingrediente e por pote      |

---

## 🗂️ Diagramas UML

Os diagramas das três classes estão na pasta `/UML`:

- `classeSorvete.png`
- `classeReceita.png`
- `classeCusto.png`
- `classe_UML.png` — visão geral do sistema

---

## 🛠️ Tecnologias

- **JavaScript (ES6+)** — Classes, módulos ESM, destructuring
- **HTML5 / CSS3** — Interface web responsiva
- **Jest** — Testes unitários
- **Node.js** — Execução via terminal

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.
