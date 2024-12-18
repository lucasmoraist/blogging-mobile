# Tech Challenge 04 - Frontend Mobile (Grupo 08)

Repositório com o desafio para o quarto módulo do curso Full Stack Development - Pós Tech

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Android Studio](https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white)

## Autores

Grupo 08:

- [Carolina de Araujo Nogueira Tinen](https://github.com/carolinanog)  RM353510
- [Esdras de Souza Mendes](https://github.com/EsdrasZero) RM356127
- [Lucas de Morais Nascimento Taguchi](https://github.com/lucasmoraist) RM355982
- [Marco Antonio Valentim Machado Junior](https://github.com/mvalentimjr) RM354344

## Requisitos
- Desenvolvimento de aplicação com React Native
- Página inicial para listagem de posts
- Sistema de autenticação e autorização
- Telas de ações CRUD apenas para usuário logados (com role 'teacher')
- Estilização usando StyleSheet

## Para rodar o projeto localmente

É necessário verificar a documentação da API que está no [repositório](https://github.com/lucasmoraist/tech-challenge2) `https://github.com/lucasmoraist/tech-challenge2` para rodá-la, da seguinte forma:

Clone o projeto

```bash
  git clone https://github.com/lucasmoraist/tech-challenge2
```

Vá para o diretório do projeto

```bash
  cd tech-challenge2
```

Instale as dependências

```bash
  npm install
```

Configure o arquivo .env seguindo a base do .env.example
```env
PORT=
NODE_ENV=
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
JWT_SECRET=
```

Rode o comando para subir o container do Docker com uma instância do banco de dados Postgres. O arquivo de configuração do compose.yaml busca as variáveis `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_DB` das variáveis de ambiente (.env).

```bash
  docker compose up -d
```

Inicie o servidor

```bash
  npm run start:dev --host <ip da máquina>
```

Com a API rodando, é possível executar o projeto do front mobile, seguindo esses passos:

Clone o projeto

```bash
  git clone https://github.com/lucasmoraist/blogging-mobile.git
```

Vá para o diretório do projeto

```bash
  cd blogging-mobile
```

## Configure a url da API

Para rodar este projeto localmente, você precisará ir até `./src/api/api.ts` e adicionar a IP da sua máquina

Instale as dependências

```bash
  npm install
```

### Opções de emuladores
- [Genymotion](https://www.genymotion.com/product-desktop/download/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)

**ps**: assim que estiver instalado e configurado os emuladores, execute ele antes de rodar o próximo comando

```bash
  npm run android
```

## Para casos de possíveis erros
1. Exclua a pasta `build` em `./android`
2. Pelo terminal acesse a pasta Android
```
cd android
```
3. E execute o seguinte comando
```
gradlew clean
```

## Licença de utilização

[MIT](https://choosealicense.com/licenses/mit/)
