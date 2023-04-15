### Documentação BACKEND API NESTJS

### NEST JS 9.1.5

## Instalando dependencias

```bash
$ npm install
```

## Rodando a aplicação localmente

```bash
# desenvolvimento
$ npm run start

# modo desenvolvedor
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Modulo de teste unitário EM BREVE

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## BANCO DE DADOS

esta sendo utilizado o MYsql<br><br>

o modelo de conexao no arquivo .env é o abaixo<br><br>

DB_HOST=localhost<br>
DB_PORT=3306<br>
DB_USERNAME=root<br>
DB_PASSWORD=password<br>
DB_DATABASE=primaza<br><br>


para facilitar a apliação em dev segue um modelo com o banco online para desenvolvimento<br><br>

SERVER_PORT=3001<br>
MODE=DEV<br>
DB_HOST=db4free.net<br>
DB_PORT=3306<br>
DB_USERNAME=user123<br>
DB_PASSWORD=123456789<br>
DB_DATABASE=primaza1213<br>
DB_SYNCHRONIZE=true<br>

### Rotas e porta padrao

por padrao a denifição da porta é a 3001

## localhost:3001

para visualização do swagger

## /api

# PRIMAZA-BACK-API

### Gerar um hash para o  jwt segura, cuidado ao colocar  em produção não pode peder essa hash, se a hash for trocada terá que fazer update em todas as senhas salvas.

```bash
# Senha base64 de tamanho 32
$ openssl rand -base64 32
PY6AZ36rLe7lSxh5JI0L9QyyLd7D9GLgX4x1exVLWNY=

```


# BackLoveDown
