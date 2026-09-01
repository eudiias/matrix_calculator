# Matrix Calculator - TypeScript Version

Uma calculadora de matrizes em linha de comando, escrita em **TypeScript/Node.js**, que permite criar, exibir e realizar operações matemáticas (soma, subtração, multiplicação, multiplicação por escalar e transposição) sobre matrizes numéricas.

## Objetivo

O programa oferece um menu interativo via terminal para que o usuário:

- Crie duas matrizes (A e B) informando manualmente cada valor
- Visualize as matrizes criadas
- Execute operações de álgebra linear entre elas (adição, subtração, multiplicação matricial)
- Realize operações sobre a matriz A isoladamente (multiplicação por escalar, transposição)

## Tecnologias Utilizadas

- **Linguagem:** TypeScript 5.0+
- **Runtime:** Node.js 16+
- **Dependências:**
  - `readline-sync`: Para entrada/saída síncrona no terminal
  - `jest`: Para testes unitários
  - `ts-jest`: Suporte a TypeScript no Jest

## Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn como gerenciador de pacotes

Para verificar sua versão do Node.js:

```bash
node --version
npm --version
```

## Instalação / Configuração do Ambiente

1. Instale as dependências:

```bash
npm install
```

2. Compile o projeto TypeScript:

```bash
npm run build
```

## Como Executar o Programa

### Usando JavaScript compilado:

```bash
npm start
```

### Usando ts-node (desenvolvimento direto):

```bash
npm run dev
```

## Como Executar os Testes

```bash
npm test
```

## Estrutura do Projeto

```
typescript-version/
├── src/
│   ├── main.ts                  # Ponto de entrada principal
│   ├── MatrixOperations.ts      # Classe com operações matriciais
│   ├── DisplayMatrix.ts         # Classe para exibição de matrizes
│   └── __tests__/
│       └── MatrixOperations.test.ts  # Testes unitários
├── dist/                        # Saída compilada em JavaScript
├── package.json
├── tsconfig.json
├── jest.config.js
├── .gitignore
└── README.md
```

## Recursos

- **Adição de matrizes**: Soma duas matrizes com as mesmas dimensões
- **Subtração de matrizes**: Subtrai a matriz B da matriz A
- **Multiplicação de matrizes**: Realiza multiplicação matricial
- **Multiplicação escalar**: Multiplica uma matriz por um valor escalar
- **Transposição**: Transpõe uma matriz (linhas viram colunas)
- **Validação de dimensões**: Valida as dimensões antes de operações
- **Interface interativa**: Menu amigável via linha de comando
- **Tratamento de erros**: Captura e exibe erros de forma clara
- **Testes completos**: Suite de testes unitários com Jest

## Exemplo de Uso

```
===== Matrix Calculator =====

1. Create a matrix A
2. Create a matrix B
3. Display matrix A
4. Display matrix B
5. Add matrices A and B
6. Subtract matrices A and B
7. Multiply matrices A and B
8. Multiply matrix A by a scalar
9. Transpose matrix A
0. Exit

Select an option: 1
Write a number of lines: 2
Write a number of columns: 2
Write the value for position (0, 0): 1
Write the value for position (0, 1): 2
Write the value for position (1, 0): 3
Write the value for position (1, 1): 4

Matrix A created successfully!

===== Matrix Calculator =====
...
```

## Melhorias em Relação à Versão Python

- **Type Safety**: TypeScript oferece tipagem estática, detectando erros em tempo de compilação
- **Performance**: JavaScript compilado é geralmente mais rápido que Python interpretado
- **Modularidade**: Melhor suporte a módulos e importações
- **Tooling**: Melhor suporte de IDE e autocomplete
- **Testes**: Jest oferece melhor experiência de testes que unittest
- **Escalabilidade**: Mais fácil expandir para uma API web ou aplicação maior

## Notas

- Este é uma reimplementação completa do projeto original em Python
- Todos os recursos da versão Python foram mantidos
- O código TypeScript é totalmente tipado e seguro
- Inclui testes unitários comprehensivos para todas as operações
- A estrutura é facilmente expansível para adicionar novas funcionalidades
