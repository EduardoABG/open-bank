# Open Bank

O desafio de desenvolver uma aplicação para avaliação da 4cadia Foundation.
Desenvolver um open bank usando práticas ágeis e um tempo de uma semana fez com que eu escolhesse o caminho o qual usaria para fazer esse projeto.

Escolhi fazer inicialmente o back end, por ser minha melhor habildiade, e para fazê-lo irei usar a Clean Architerure, fazendo com que seja organizado e de fácil entendimento.

Para a avaliação gostaria de ser avaliado principalmente pelo Back-end, o front não é ainda o meu forte, o que fiz do front eu pesquisei nas documentações do bootstrap e fiz algo bem básico, quando ao consumo da API só foi feito da rota de cadastro, a de login ficou icompleta por não saber como consumir a API ainda.

# Back End

Para desenvolver o back end sera usado o TypeScript, NodeJS, Express, MongoDB, Mongoose, assim criando uma API Rest.
Ao criar a conta, usa-se a estrutura de accountNumber com uma implementação de autoincrement usando a biblioteca mongoose-auto-increment, para assim ter uma contagem no numero de contas, Foi usado o Insomnia para fazer a documentação das rotas do User e de Autenticação na pasta docs, também foi feito o deploy da API no Heroku, assim podendo facilmente consumir a API.

# Front End

O Front end está sendo feito basicamente de bootstrap no entanto não ficou completo, foi feito a parte de cadastro do usuario está funcionando.

### 🔧 Instalação

Para a **Implantação** dessa aplicação, é necessário seguir o seguinte passo-a-passo:

#### 1 - Clonar o repositório

```
git clone https://github.com/EduardoABG/open-bank.git
```

#### 2 - Instalar pacotes e dependências

```
npm install
```

#### 3 - Compilar o códio TS para JS

```
tsc
```

#### 4 - Criar no atlas do mongoDB uma database e criar uma conexão

- Criar um arquivo .env na raiz do projeto de acordo com .env.exemple;

#### 5 - Inicializar a API localmente

```
npm run dev
```

### 🔧 Ferramentas Utilizadas

#### Foram utilizados as seguintes ferramentas:

- [Typescript](https://www.typescriptlang.org/) - Linguagem de programação
- [Node.JS](https://nodejs.org/en/) - Framework para executar JS fora do navegador
- [Express](https://expressjs.com/pt-br/) - Framework Node.js para criação de APIs
- [Mongoose](https://mongoosejs.com/) - Modelador de objetos para MongoDB e NodeJS.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Biblioteca JS para encriptação de dados
- [dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca JS para carregar variáveis de ambiente
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Biblioteca de implementação para JWT
- [mongoose-auto-increment-ts](https://www.npmjs.com/package/mongoose-auto-increment-ts) - Biblioteca que autoincrementa no MongoDB alguma variavel do banco que for escolhida pelo desenvolvedor
- [express-validation](https://www.npmjs.com/package/express-validation) - É uma middleware do express que valida uma requisição e retorna erros, caso eles aconteçam
