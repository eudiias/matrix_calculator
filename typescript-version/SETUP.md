# Matrix Calculator - Guia de Setup

## 📋 Pré-requisitos

- **Node.js**: v16.0.0 ou superior
  - Download: https://nodejs.org/
  - Incluye: npm (gerenciador de pacotes)

## ⚙️ Instalação

### 1. Instale Node.js

Se você não tem Node.js instalado, baixe e instale de: https://nodejs.org/

Para verificar se está instalado:
```bash
node --version
npm --version
```

### 2. Navegue até a pasta do projeto

```bash
cd "c:\Users\Pichau\Downloads\matrix_calculator-main\typescript-version"
```

### 3. Instale as dependências

```bash
npm install
```

Isso irá instalar:
- **typescript**: Compilador TypeScript
- **readline-sync**: Entrada/saída de terminal
- **jest**: Framework de testes
- **ts-jest**: Suporte TypeScript para Jest
- **@types/readline-sync**: Tipos TypeScript para readline-sync

## 🚀 Comandos Disponíveis

### Compilar o projeto
```bash
npm run build
```
Gera arquivos `.js` compilados na pasta `dist/`

### Executar a aplicação
```bash
npm start
```
Ou use o comando com PATH completo (Windows):
```bash
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH; & "C:\Program Files\nodejs\npm.cmd" start
```

### Rodar testes
```bash
npm test
```

### Modo desenvolvimento (compilação automática)
```bash
npm run dev
```

## 📦 Dependências do Projeto

| Pacote | Versão | Tipo | Descrição |
|--------|--------|------|-----------|
| readline-sync | ^1.4.10 | dependência | Entrada/saída síncrona no terminal |
| typescript | ^5.0.0 | devDependency | Compilador TypeScript |
| jest | ^29.0.0 | devDependency | Framework de testes |
| ts-jest | ^29.0.0 | devDependency | Suporte TypeScript para Jest |
| @types/node | ^20.0.0 | devDependency | Tipos TypeScript para Node.js |
| @types/jest | ^29.0.0 | devDependency | Tipos TypeScript para Jest |
| @types/readline-sync | ^1.4.4 | devDependency | Tipos TypeScript para readline-sync |
| ts-node | ^10.0.0 | devDependency | Executa TypeScript diretamente |

## 🔍 Estrutura do Projeto

```
typescript-version/
├── src/
│   ├── main.ts                  # Aplicação principal
│   ├── MatrixOperations.ts      # Operações matriciais
│   ├── DisplayMatrix.ts         # Exibição de matrizes
│   └── __tests__/
│       └── MatrixOperations.test.ts  # Testes unitários
├── dist/                        # Código compilado (gerado após npm run build)
├── node_modules/                # Pacotes instalados (gerado após npm install)
├── package.json                 # Configuração e dependências
├── package-lock.json            # Lock file para versões exatas
├── tsconfig.json                # Configuração TypeScript
├── jest.config.js               # Configuração Jest
└── README.md                    # Documentação
```

## 🐛 Solução de Problemas

### npm: comando não reconhecido

Se receber erro "npm não é reconhecido", use:
```bash
& "C:\Program Files\nodejs\npm.cmd" install
```

Ou adicione Node.js ao PATH permanentemente:
```bash
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Program Files\nodejs", "User")
```

### Erro de compilação TypeScript

Se receber erros ao compilar, tente:
```bash
npm install --save-dev typescript @types/readline-sync
npm run build
```

### Testes não funcionam

Instale as dependências de teste:
```bash
npm install --save-dev jest ts-jest @types/jest
npm test
```

## ✅ Checklist de Setup

- [ ] Node.js instalado (`node --version` retorna versão)
- [ ] npm disponível (`npm --version` retorna versão)
- [ ] Pasta do projeto acessível
- [ ] `npm install` executado sem erros
- [ ] `npm run build` compilou sem erros
- [ ] `npm start` inicia a aplicação

## 📝 Próximos Passos

Após completar o setup:

1. Execute `npm start` para abrir a aplicação
2. Teste criando matrizes (opção 1 ou 2)
3. Teste as operações disponíveis
4. Execute `npm test` para rodar os testes unitários

Aproveite! 🚀
