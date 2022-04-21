# Fluxxo frontend


###### English
## Introduction
Fluxxo is an evolution of an older project "MoviMercado", which was my first project that was actually used in real life and not just tucked inside a random folder on my desktop. The 2019 COVID pandemic came about and with it brought many problems. One of them were new the laws being enforced (to try) to limit the number of people in public spaces therefore reducing the spread of the pandemic. Keeping track of the traffic of people for small business this was easier or unecessary as they were often overlooked but for larger establishments not so, especially for a local market that is also a very popular tourist attraction.

The market trustee at the time was a very big friend of mine and had discussed the problem with the current solution (messaging in a groupchat) being ineffective. There the idea was born and my learnings started taking big steps. It was a simple web application developed using Node.js, Express for the server, MongoDB for the database, basic HTML and CSS for the pages and Socket.io to send and recieve real time data all together which solved the problem. It wasn't the perfect solution nor the best but it was lightweight and hosted free on Heroku and worked. The local law enforcement backed down and now the local market was being able report how many people were entering and exiting through each entrance at any given time and how many were inside at that exact moment.

## The Future
After almost two years I landed my first job as a developer where my apprenticeship and experience took another huge step. I looked back and saw some potential in the idea so I decided to rewrite the whole project (heh, more than once). The evolution will consist of same idea basically, but not centered around one establishment but many, a reduction on the tracked data, seperation of the back and frontend and more mature and robust code permitting easier improvements.

## How It Works
The basic features that either are or will be implemented:
- Accounts with different roles and permissions (Administrators, moderators and regular users)
- Accounts can be linked with more than one establishment, created by administrators
- Each establishment will have there own "connection" through websockets for real-time tracking and saving data for analyzing later
- Easier and more open configuration, like adding, removing, disabling entrances or other users

Technologies used for the backend: Node.js, TypeScript, NestJS, TypeORM, Sockets.io

Database: MySQL

Frontend: TypeScript, React, MUI

[Link to the backend](https://github.com/nickfera/fluxxo_api)


###### Português
## Introdução
Fluxxo é uma evolução de um projeto anterior "MoviMercado", que foi o meu primeiro project que foi utilizado numa situação real e não apenas entocado numa pasta aleatória na área de trabalho. A pendemia COVID-19 surgiu e com ela trouxe muitos problemas. Alguns deles foram as novas leis para (tentar) limitar e diminuir a quantidade de pessoas em espaços públicos assim diminuindo a espalha da pandemia. Acompanhar o movimento de pessoas em comércios pequenos é fácil ou desnecessário pois eram muitas vezes esquecidos mas estabelecimentos maiores não, principalmente para um mercado local que também é um ponto turístico da cidade.

O síndico na época era um grande amigo meu e conversamos sobre o problema e a solução na época (mensagens em um grupo) que estava inefetivo. Assim a ideia surgiu e os meus aprendizados inciaram passos maiores. Era uma simples aplicação web desenvolvido usando Node.js, Express no servidor, MongoDB para o banco de dados, HTML e CSS para as páginas e Socket.io para o envio e recebimento de dados em tempo real que tudo junto resolvia o problema. Não era a solução mais perfeita nem a melhor mas era uma aplicação leve que foi hospedado gratuitamente no Heroku e funcionou. A fiscalização municipal recuou e agora o mercado podia relatar e monitorar a quantidade de pessoas que estavam entrando e saindo por cada entrada a qual quer hora e quantos tinham lá dentro naquele momento exato.

## The Future
Depois de quase dois anos eu consegui meu primeiro emprego como desenvolvevor onde novamente meus aprendizados e experiência tomaram outro grande passo. Olhei para trás e vi potencial na ideia e decidi escrever o projeto inteiro (algumas vezes). A evolução consiste nas mesmas ideias basicamente, mas não centrado em um único estabelecimento mas vários, uma redução nos dados relatados, separação do backend e frontend e no geral um código mais maduro e robusto permitindo melhorias mais fáceis.

## Como Funciona
As funcionalidades básicas que estão presente ou ainda serão implementados:
- Usuários com papéis e permissões diferentes (Administradores, moderadores e usuários comuns)
- Usuários podem ser ligados a mais de um estabelecimento, criados pelos administradores
- Cada estabelecimento terá sua própria "conexão" por websockets que permite relatar em tempo-real e salvar os dados para serem analizados depois
- Configuração mais fácil e ampla como adição, remoção, desativação de entradas ou outros usuários

Tecnologias usado no backend: Node.js, TypeScript, NestJS, TypeORM, Sockets.io

Banco de dados: MySQL

Frontend: TypeScript, React, MUI

[Link para o backend](https://github.com/nickfera/fluxxo_api)