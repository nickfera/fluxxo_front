# Fluxxo frontend


###### English
## Introduction
Fluxxo is an evolution of an older project "MoviMercado", which was my first project that was actually used in real life and not just tucked inside a random folder on my desktop. The 2019 COVID pandemic came about and with it brought many problems. One of them were new the laws being enforced (to try) to limit the number of people in public spaces therefore reducing the spread of the pandemic. Keeping track of the traffic of people for small business this was easier or unecessary as they were often overlooked but for larger establishments not so, especially for a local market that is also a very popular tourist attraction.

The monitoring at the time was done by sending messages in a WhatsApp group which was inefficient and did not work. So the idea came about and I developed a simple web application using Node.js, Express for the server, MongoDB for the database, basic HTML and CSS for the pages and Socket.io to send and recieve real time data all together which solved the problem. It wasn't the perfect solution nor the best but it was lightweight and hosted free on Heroku and worked. The local law enforcement backed down and now the local market was being able report how many people were entering and exiting through each entrance at any given time and how many were inside at that exact moment.

## The Future
After a while I landed my first job as a developer where my apprenticeship and experience took another huge step. I looked back and saw some potential in the idea so I decided to rewrite the whole project (heh, more than once). The evolution will consist of same idea basically, but not centered around one establishment but many, a reduction on the total space used for tracked data, seperation of the back and front-end and more mature and modern code permitting more functionalities and improvements.

## How It Works
The basic features that either are or will be implemented:
- Accounts with different roles and permissions (Administrators, moderators and regular users)
- Accounts can be linked with more than one establishment, created by administrators
- Each establishment will have there own "connection" through websockets for real-time tracking and saving data for analyzing later
- Easier and more open configuration, like adding, removing, disabling entrances or other users

Technologies used for the backend: Node.js, TypeScript, NestJS, TypeORM, Sockets.io, Redis, MySQL

Frontend: TypeScript, React, MUI

[Link to the backend](https://github.com/nickfera/fluxxo_api)
[Link to the older project 'MoviMercado'](https://github.com/nickfera/movimercado)


###### Portugu??s
## Introdu????o
Fluxxo ?? uma evolu????o de um projeto anterior "MoviMercado", que foi o meu primeiro project que foi utilizado numa situa????o real e n??o apenas entocado numa pasta aleat??ria na ??rea de trabalho. A pandemia COVID-19 surgiu e com ela trouxe muitos problemas. Alguns deles foram as novas leis para (tentar) limitar e diminuir a quantidade de pessoas em espa??os p??blicos assim diminuindo a espalha da pandemia. Acompanhar o movimento de pessoas em com??rcios pequenos ?? f??cil ou desnecess??rio pois eram muitas vezes esquecidos mas estabelecimentos maiores n??o, principalmente para um mercado local que tamb??m ?? um ponto tur??stico da cidade.

A controle era feito por mensagens em um grupo de WhatsApp pelo celular que era ineficaz e n??o funcionava. Ent??o desenvolvi uma simples aplica????o web usando Node.js, Express no servidor, MongoDB para o banco de dados, HTML e CSS para as p??ginas e Socket.io para o envio e recebimento de dados em tempo real que tudo junto resolvia o problema. N??o era a solu????o mais perfeita nem a melhor mas era uma aplica????o leve que foi hospedado gratuitamente no Heroku e funcionou. A fiscaliza????o municipal recuou e agora o mercado podia relatar e monitorar a quantidade de pessoas que estavam entrando e saindo por cada entrada a qual quer hora e quantos tinham l?? dentro naquele momento exato.

## O Futuro
Depois consegui meu primeiro emprego como desenvolvevor onde novamente meus aprendizados e experi??ncia tomaram outro grande passo. Olhei para tr??s e vi potencial na ideia e decidi escrever o projeto inteiro (algumas vezes). A evolu????o consiste nas mesmas ideias basicamente, mas n??o centrado em um ??nico estabelecimento mas v??rios, uma redu????o de espa??o dos dados relatados, separa????o do backend e frontend e no geral um c??digo mais maduro e moderno, tendo mais funcionalidades e sendo mais expans??vel.

## Como Funciona
As funcionalidades b??sicas que est??o presente ou ainda ser??o implementados:
- Usu??rios com pap??is e permiss??es diferentes (Administradores, moderadores e usu??rios comuns)
- Usu??rios podem ser ligados a mais de um estabelecimento, criados pelos administradores
- Cada estabelecimento ter?? sua pr??pria "conex??o" por websockets que permite relatar em tempo-real e salvar os dados para serem analizados depois
- Configura????o mais f??cil e ampla como adi????o, remo????o, desativa????o de entradas ou outros usu??rios

Tecnologias usado no backend: TypeScript, Node.js, NestJS, TypeORM, Sockets.io, Redis, MySQL

Frontend: TypeScript, React, MUI

[Link para o backend](https://github.com/nickfera/fluxxo_api)
[Link para o projeto mais antigo 'MoviMercado'](https://github.com/nickfera/movimercado)