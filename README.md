<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desafios-propostos">Desafios propostos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-o-projeto">Executando o projeto</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <a href="https://teste-tecnico-geopix.vercel.app/" target="_blank">Clique aqui</a> para acessar a versão web
</p>


## 🖥️ Projeto

Se trata de um --teste técnico-- proposto pela Geopix, no qual fui orientado a construir um simples website com desafios
lógicos

## 📲 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias/bibliotecas:

<table border="0">
 <tr>
<td> Typescript</td>
<td> React.JS</td>
<td> Styled Components</td>
 </tr>
 <tr>
<td> react-hook-form</td>
<td> UUID</td>
<td> Yup</td>
 </tr>
</table>

## 🌟 Desafios propostos

### Desafio do relógio
Neste desafio, a proposta foi renderizar um relógio que mostrasse a hora, minutos e segundos em tempo real.
Não tem muito segredo nesse desafio, apenas utilizei dos recursos nativos do Javascript como: Date, padStart.

### Manipulador de itens
Esse desafio já teve um grau de complexidade um pouco superior em comparação com o primeiro, onde eu precisava
criar um campo input para pegar uma informação que, ao clicar no botão de adicionar, enviava essa informação para 
o select, ficando como opção todos os itens inseridos através do input. Também tem um botão de remover o item selecionado
e um botão de limpar todos os dados inseridos até o momento.

Nele utilizei de alguns recursos que não eram obrigatórios como: 
- [x] yup, para validar o campo input; 
- [x] react-hook-form, para submeter os valores obtidos no input; 
- [x] useState, para gerenciamento das informações;
- [x] UUID, para gerar identificação única para cada valor criado;

### Bola tímida
Esse desafio foi muito legal de fazer, foi algo que eu nunca tinha feito antes. 
O funcionamento é simples, ao colocar o mouse sobre a bolinha vermelha, ela altera sua posição
para outra totalmente aleatória (esses valores foram gerados através do Math.random())

## 👨🏻‍💻 Executando o projeto

- 1º - clone o repositório para seu computador;
- 2º - no local clonado, abra o terminal e execute o **yarn** ou **npm install** para instalar as dependências do projeto;
- 3º - abra o projeto com o comando ``` code . ```

Para acessar a versão web:

```cl
yarn dev ou npm run dev
```
