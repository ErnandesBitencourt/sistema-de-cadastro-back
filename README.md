#  Projeto sistema-de-cadastro-back.

Concluído. 

### Sobre o Projeto

O projeto é tem como objetivo a construção de uma API(API REST) que funciona fornecendo informações no banco de dados MySQL. Dentro disso, os endpoints funcionam a partir de lógicas de,
listagem de clientes cadastrados, criar cadastro, editar cadastro e deletar cadastro.
O código foi escrito a partir do paradigma de Programação Orientada à Objeto, buscando a utilização de conceitos de Clean Architecture e Clean Code. Deploy do projeto feito no Heroku.




### Funcionalidades 

- Criar cadastro
- Lista de clientes cadastrados 
- Editar cadatro
- Deleatar cadastro


### Tecnologias Utilizadas:

- Node.Js
- TypeScript
- Knex
- MySQL
- Express
- Cors
- Deploy feito no Heroku

### Documentação da API 

- Mostra todos os clientes cadastrados.

* GET  https://bemol-cadastro.herokuapp.com/user/allUsers
* Content-Type: application/json

![image](https://user-images.githubusercontent.com/80565676/186037259-dddc3a53-2ec0-4ab8-bffc-cd63b4d37506.png)


-Criar cadastro.

* POST https://bemol-cadastro.herokuapp.com/user/createUser
* Content-Type: application/json

{
   "name": "veronica bitencourt", 
   
   "age": 25, 
   
   "email": "veronica@gmail.com" ,
   
   "address": "69099782",
   
   "house":75
}

![image](https://user-images.githubusercontent.com/80565676/186037577-5ab81f6e-53b4-4105-9143-67d07441c1f6.png)


- Editar Cadastro.

* PUT  https://bemol-cadastro.herokuapp.com/user/edit/:id
 * Content-Type: application/json
Exemplo:
* PUT  https://bemol-cadastro.herokuapp.com/user/edit/1661189015439
* * Content-Type: application/json

{  
   "name": "Keven Kauan Bitencourt", 
   
   "age": 25, 
   
   "email": "kevenkauan@gmail.com" ,
   
   "address": "69099782",
   
   "house":50
}

- Deletar cadastro
* DELETE   https://bemol-cadastro.herokuapp.com/user/deleteUser/:id
Content-Type: application/json

Exemplo:
* DELETE   https://bemol-cadastro.herokuapp.com/user/deleteUser/1660945325562
Content-Type: application/json





### Desenvolvido por 
Ernandes Bitencourt
