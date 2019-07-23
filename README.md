# backend-burger-queen

API com Node.js

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. HTTP API Checklist](#4-HTTP-API-Checklist)

***

## 1. Preâmbulo

Um pequeno restaurante de hambúrgueres, que está crescendo, precisa de um sistema através do qual ele possa receber pedidos usando um tablet e enviá-los para a cozinha para que eles sejam preparados de forma eficiente.

Nossa cliente nos pediu para desenvolver uma API que possa ser integrada com uma interface, na qual outra equipe de desenvolvedoras está trabalhando.

## 2. Resumo do projeto

Por uma API, neste caso, nos referimos a um servidor web, que é basicamente um programa que escuta uma porta de rede, através da qual podemos enviar requisições (request) e obter respostas (response).

Um servidor web deve gerenciar as requisições recebidas e produzir respostas àquelas requisições que serão enviadas de volta para o cliente. Quando falamos sobre aplcações de servidor, isso implica uma arquitetura cliente / servidor, onde o cliente é o programa que faz as requisições através de uma rede (por exemplo, o navegador, cURL, etc), e o servidor é o programa que recebe essas requisições e respostas.

O Node.js nos permite criar servidores Web super eficientes de uma forma relativamente simples, tudo isso usando JavaScript!

## 3. Objetivos de Aprendizagem

O principal objetivo de aprendizagem é ganhar experiência com o Node.js como uma ferramenta para desenvolver aplicações de servidores, junto com uma série de ferramentas comuns usadas neste tipo de contexto (Express como framework, MongoDB ou MySQL como banco de dados, ferramentas de autenticação, etc).

Este projeto teve como objetivo construir um servidor web que deve servir JSON via HTTP e implementá-lo em um servidor na nuvem. Familiarização com conceitos como rotas (routes), URLs, HTTP e REST (verbs, request, response, headers, body, status codes...), JSON, JWT (JSON Web Tokens), conexão com um banco de dados, variáveis de ambiente, deployment, etc.
 
## 4. HTTP API Checklist

Este projeto foi individual.

### 4.1 API
Segundo o estabelecido pela documentação entregue por nossa cliente, a API deve conter os seguintes endpoints:

#### 4.1,1 /
* GET /
#### 4.1.2 /auth
* GET /users
* GET /users/:id
* POST /users
* PUT /users/:id
* DELETE /users/:id
#### 4.1.3 /menu
* GET /menu
* GET /menu/:id
* POST /menu
* PUT /menu/:id
* DELETE /menu/:id
#### 4.1.4 /orders
* GET /orders
* GET /orders/:id
* POST /orders
* PUT /orders/:id
* DELETE /orders/:id
#### 4.1.5 /ordersMenu
* GET /ordersMenu
* GET /ordersMenu/:id
* POST /ordersMenu
* PUT /ordersMenu/:id
* DELETE /ordersMenu/:id