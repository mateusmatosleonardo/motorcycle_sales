![BRAND](https://user-images.githubusercontent.com/73812069/167428578-a0f98cc1-8d2b-42e5-9a13-69b855d75ca8.png)

| Codinome | Framework | Linguagem | Plataformas |
|---|---|---|---|
| Motorcycle Sales | React-native | JavaScript/TypeScript | [Android, IOS] |

### Sumário
- Introdução
- Preview (screens)
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
Esse projeto de trata de uma aplicativo de vendas de motos fictício.

## Preview
![login](https://user-images.githubusercontent.com/73812069/167340586-0e802c4b-9f2a-40dd-8329-9bc81f545301.png)
![home](https://user-images.githubusercontent.com/73812069/167338275-381e222f-7bf8-42ae-85e4-01780a3478c5.png)
![details](https://user-images.githubusercontent.com/73812069/167338576-1ed80f80-8437-4467-bb6f-8ed36037d785.png)
![payment](https://user-images.githubusercontent.com/73812069/167340365-61892889-04ff-44dc-9592-e80864f76302.png)
![modalCreditCard](https://user-images.githubusercontent.com/73812069/167339093-92e1bfff-c3da-479c-b1df-01bc225da690.png)
![installment](https://user-images.githubusercontent.com/73812069/167339407-88872a0b-b2a7-4bed-836b-42fe7570a12c.png)
![purchaseData](https://user-images.githubusercontent.com/73812069/167340790-6cb14a10-914e-47a9-9dd0-b9ca73600232.png)

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
<br>
Para ios, rode:
<br>
`pod install`

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
