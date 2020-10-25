# API CRUD

## Descrição

Este repositório contém uma API em NodeJS se comunicando com um banco de dados SQLite. Essa API possui as funcionalidades de CRUD para a tabela Developers

## Índice de conteúdos
<!--ts-->
   * [Descrição](#descrição)
   * [Pré-Requesitos](#pré-requisitos)
   * [Features](#features)
   * [Funcionamento](#funcionamento)
   * [Testes](#testes)
<!--te-->

## Pré-requisitos
É necessário instalar o [Docker](https://www.docker.com/products/docker-desktop) na sua máquina 

## Features

Essa API possui as seguintes funcionalidades:
  * Cadastrar desenvolvedores
  * Listar os desenvolvedores já cadastrados
    * Por nome
    * Por Idade
    * Todos
  * Atualizar os campos de um desenvolvedor já cadastrado
  * Remover desenvolvedor(es) já cadastrado(s)
    * Por idade
    * Por nome
    * Por ID

Esse repositório também conta com um arquivo de log adaptado para simplificar o log da aplicação. 

Também foram feitos testes unitários para os endpoints da API.

## Funcionamento

Para criar o *container* rode o seguinte comando: 

```
docker build -f app.dockerfile -t willsakata/dockerapi . 
```

E para rodar o *container* execute o seguinte comando: 

```
docker run -p 3000:3000 -d --name apicrud willsakata/dockerapi
```

> Obs: caso a porta 3000 esteja ocupada, substitua por uma porta alternativa: porta_alternativa:3000

Feito isso a API estará online na porta escolhida e será possível fazer as requisições usando o Insomnia, Postman, etc.

Caso queira parar o container execute os seguintes comandos: 
```
docker stop apicrud
docker rm apicrud
```

## Testes

Os testes foram feitos utilizando o Jest e o Supertest para testar os endpoints da API. Os testes serão executados sempre que o container for executado, porém pode-se executar os testes sempre que desejar, basta ter o NodeJs instalado, basta executar o comando: 

```
npm test
```