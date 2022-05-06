# motorcycle_sales
## Libs usadas no projeto 👇
**Para validação de formulários:**
<br>
- hookform/resolvers
- react-hook-form
- yup

**Para simulação de API:**
- json-server

**Para consumo de API:**
- axios

**Para ícones:**
- react-native-vector-icons

**Para estilização:**
- styled-components

**Para padronização de commits:**
- gitmoji CLI

## Instruções de como rodar o projeto 👇
### Passo - 1
clone o repositório com o seguinte comando:
<br>
`git clone git@github.com:mateusmatosleonardo/motorcycle_sales.git`
### Passo - 2
navegue até a pasta clona e abra o projeto e dê o seguinte comando para instalar as dependências:
<br>
`yarn install ou npm install`
## Passo - 3 (Configuração do json-server)
vá até o arquivo package.json e configure o script com o seu endereço IP e com porta que desejar, exemplo:
<br>
`
"scripts": {
    "server": "json-server --watch db.json --host 100.000.000 --port 8000"
  }
`
## Passo - 4 
suba o servidor do json-server com o seguindo script:
<br>
`yarn server ou npm server`
 
 ## Passo - 5
 verifique se o servidor está rodando e em seguida build o projeto com os seguintes comandos:
 <br>
 para iniciar o metrô:
 <br>
 `yarn start`
 <br>
 ou se preferir
 <br>
 `npx react-native start`
 
 para iniciar o aplicativo:
 <br>
 `yarn android`
 <br>
 ou se preferir
 <br>
 `npx react-native run-android`
 
 ## Passo - 6
 para entrar no aplicativo insira o e-mail e a senha abaixo:
 <br>
 e-mail: me2@test.com
 <br>
 senha: 87654321

## Passo - 7 (Introdução ao app)
tudo pronto para usar! o app lista uma coleção de motos com dados reais, contendo tela de login, tela de listagem de motos, tela de detalhes e simulaçao de compra.
