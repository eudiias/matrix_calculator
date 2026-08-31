# Matrix Calculator

Uma calculadora de matrizes em linha de comando, escrita em Python, que permite criar, exibir e realizar operações matemáticas (soma, subtração, multiplicação, multiplicação por escalar e transposição) sobre matrizes numéricas.

## Objetivo

O programa oferece um menu interativo via terminal para que o usuário:

- Crie duas matrizes (A e B) informando manualmente cada valor;
- Visualize as matrizes criadas;
- Execute operações de álgebra linear entre elas (adição, subtração, multiplicação matricial), sobre a matriz A isoladamente (multiplicação por escalar, transposição).

## Tecnologias e bibliotecas utilizadas

- **Linguagem:** Python 3 (uso de `match/case`, disponível a partir do Python 3.10)
- **Bibliotecas:** nenhuma biblioteca externa é utilizada — o projeto depende apenas da biblioteca padrão do Python.

## Pré-requisitos

- Python 3.10 ou superior instalado (necessário por causa do `match/case` usado em `main.py`).

Para verificar sua versão do Python:

```bash
python3 --version
```

## Instalação / configuração do ambiente

Não há dependências externas a instalar. Basta ter os três arquivos do projeto na mesma pasta:

```
matrix-calculator/
├── main.py
├── matrix.py
└── display_matrix.py
```

Se necessário, clone/copie o projeto para uma pasta local e acesse o diretório:

```bash
cd matrix-calculator
```

## Como compilar o programa

Python é uma linguagem interpretada, portanto não há etapa de compilação. Basta executar o arquivo principal diretamente (ver seção abaixo).

## Como executar o programa

```bash
python3 main.py
```

O programa exibirá um menu com as seguintes opções:

```
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
```

Digite o número correspondente à opção desejada e pressione Enter.

## Exemplo de uso

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

Select an option: 3
[ 1  2  ]
[ 3  4  ]

Select an option: 8
What is the scalar number?: 2
[ 2  4  ]
[ 6  8  ]
```

> Observação: a opção 8 (multiplicação por escalar) e a opção 9 (transposição) usam apenas a matriz A, mesmo que a matriz B já tenha sido criada — isso está de acordo com a implementação atual de `MatrixOperations`, que aceita `matrixB` como parâmetro opcional.

## Estrutura do projeto

| Arquivo | Responsabilidade |
|---|---|
| `main.py` | Ponto de entrada do programa. Contém o menu interativo (`match/case`), as funções de entrada de dados (`input_matrix`, `create_matrix`) e o laço principal que interpreta as opções do usuário. |
| `matrix.py` | Define a classe `MatrixOperations`, responsável pelas operações matemáticas: `add`, `subtract`, `multiply`, `scalar_multiply` e `transpose`. Recebe uma ou duas matrizes no construtor (`matrixA` obrigatória, `matrixB` opcional). |
| `display_matrix.py` | Define a classe `DisplayMatrix`, responsável apenas por formatar e imprimir uma matriz no terminal. |

### Validações existentes

- `add` e `subtract` verificam se as matrizes têm o mesmo número de linhas e colunas antes de operar, levantando `ValueError` caso contrário.
- `multiply` verifica se o número de colunas de A é igual ao número de linhas de B, levantando `ValueError` caso contrário.
- O laço principal em `main.py` captura `ValueError` (por exemplo, entrada de texto não numérico ou erros de dimensão levantados pelas operações) e exibe a mensagem de erro sem encerrar o programa.

## Testes

O projeto **não possui testes automatizados** (não há arquivos de teste, framework de testes ou pasta `tests/` no código-fonte fornecido). A verificação do funcionamento deve ser feita manualmente, executando `main.py` e testando as opções do menu.

## Erros comuns e soluções

| Erro | Causa provável | Solução |
|---|---|---|
| `ModuleNotFoundError: No module named 'display_matrix'` ou `'matrix'` | O programa foi executado de um diretório diferente daquele onde estão os três arquivos `.py` | Execute `python3 main.py` estando dentro da pasta que contém `main.py`, `matrix.py` e `display_matrix.py` |
| `Error: invalid literal for int() with base 10: '...'` | Foi digitado um valor não numérico onde o programa esperava um inteiro (dimensões, valores da matriz ou opção do menu) | Digite apenas números inteiros quando solicitado |
| `Error: Matrices must have the same dimensions for addition/subtraction.` | Tentativa de somar/subtrair matrizes A e B com dimensões diferentes | Crie as matrizes A e B com o mesmo número de linhas e colunas |
| `Error: Incompatible matrix dimensions for multiplication.` | O número de colunas de A é diferente do número de linhas de B | Ajuste as dimensões das matrizes conforme a regra de multiplicação matricial (colunas de A = linhas de B) |

| `NameError: name 'matrixA' is not defined` (ou `matrixB`) | Tentativa de exibir ou operar uma matriz antes de criá-la (ex.: escolher a opção 3 sem antes usar a opção 1) | Crie a matriz A (opção 1) e/ou B (opção 2) antes de usar as opções que dependem delas |
| `SyntaxError` relacionado a `match`/`case` ao rodar o programa | Uso de uma versão do Python anterior à 3.10 | Atualize para Python 3.10 ou superior |

## AUTORES:

# Carlos Dias de Oliveira Nascimento
# Kauan Bruno Ferreira
# Fernando Fogaça
