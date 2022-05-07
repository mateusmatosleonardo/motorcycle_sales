
| Codinome | Framework | Linguagem | Plataformas |
|---|---|---|---|
| Motorcycle Sales | React-native | JavaScript | [Android, IOS] |

### Sumário
- Introdução
- Pré-requisitos
- Clonando repositório
- Configuração do projeto
  - Ambientes
    - API
    - Instalação das dependências do projeto
- Execução do projeto
  - Android
  - IOS
- Informações gerais
  - Guidelines
  - Gestão de ícones no aplicativo
- Suporte
  

## Introdução
Esse projeto de trata de uma aplicativo de vendas de motos

## Pré-requisitos
- [✔️] git
- [✔️] VS code
- [✔️] Java SDK
- [✔️] Android SDK
- [✔️] NodeJS
- [✔️] Android Virtual Device ou Dispositivo físico 
- [✔️] cocoapods


## Clonando repositório
Após todas as dependências atendidas e instaladas na sua máquina, basta clonar o repositório com o seguindo comando:
<br>
`git clone git@github.com:mateusmatosleonardo/motorcycle_sales.git`
<br>
`cd motorcycleSales`

## Configuração do projeto
### API
Vá até o arquivo package.json e configure o script com o seu endereço IP e com a porta que desejar, exemplo:
<br>
`
"scripts": {
    "server": "json-server --watch db.json --host 100.000.000 --port 8000"
  }
`
<br>
Suba o servidor do json-server com o seguindo script:
<br>
`yarn server ou npm server`

### Instalação das dependências
Para instalar as dependências do projeto, execute o seguinte comando:
<br>
`yarn install`
<br>
ou
<br>
`npm install`

## Execução do projeto

### Android
Para rodar o aplicativo segue os seguintes comandos:
<br>
Para iniciar o metrô:
<br>
`yarn start`
<br>
Ou se preferir
<br>
`npx react-native start`
<br>
Para iniciar o aplicativo:
<br>
`yarn android`
<br>
Ou se preferir
<br>
`npx react-native run-android`

### IOS
Para rodar o aplicativo no ambiente IOS segue os seguintes comandos:
<br>
Para iniciar o metrô:
<br>
`yarn start`
<br>
ou se preferir
<br>
`npx react-native start`
<br>
Para iniciar o aplicativo:
<br>
`npx react-native run-ios`

## Informações gerais
### Gestão de ícones no aplicativo
Para adicionar novos ícones ao aplicativo é necessário utilizar o site https://oblador.github.io/react-native-vector-icons/ e importar o ícone da seguinte forma:
<br>
`import Left from 'react-native-vector-icons/Ionicons'`

## Suporte
Qualquer dúvida, sugestão ou relato de bugs, submete um novo PR ou entre em contato com m4teusmatos@gmail.com
