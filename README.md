# bankapp-React-Native
Pequeno projeto em react-native de um appbank.

Para rodar este projeto em seu computador siga os passos a seguir.

Obs: Execute os comandos citados abaixo sem as aspas duplas.

1 - Caso não possua, Baixe e instale o nodejs em https://nodejs.org/en/download/. Para verificar execute o comando "node -v" no terminal.
2 - Caso não possua, Baixe e instale o git em https://git-scm.com/downloads. Para verificar execute o comando "git --version" no terminal.
3 - Clone este repositório usando o git, acesse alguma pasta em seu computador, abra o prompt de comando na mesma e digite o comando "git clone https://github.com/alvesil/bankapp-React-Native".
4 - Acesse a pasta do projeto com o comando "cd ./bankapp-React-Native" .
5 - Instale as dependências dos módulos do node com o comando "npm install". O npm é instalado com o nodejs. Verifique usando o comando "npm -v".
6 - Execute o expo com o comando "expo start".
7 - Você vai precisar de um emulador de Android ou seu próprio smartphone.
8 - Utilizando o Android.
    8.1 - Baixe e instale o Android Studio em https://developer.android.com/studio?hl=pt&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45Y14c506cwulDcm_ZDhxDjJMGIzY2_wjM4UW3lgYlCUKdTN5ptAMoUaAutQEALw_wcB&gclsrc=aw.ds .
    8.2 - Ao abrir o Android Studio, acesse o Device Manager e crie e inicie um Dispositivo Virtual, será necessário que o Android Studio baixe alguns arquivos.
    8.3 - Após iniciado o dispositivo virtual, feito o passo (6 - Execute o expo com o comando expo start), volte ao terminal e digite "a" para abrir o app no dispositivo virtual.
9 - Utilizando seu smartphone.
    9.1 - Obs: É necessário ativar o modo de depuração.
    9.2 - Conecte seu aparelho ao computador com um cabo USB, e o modo de depuração ativado.
    9.3 - Feito o passo (6 - Execute o expo com o comando expo start), volte ao terminal e digite "a" para abrir o app no seu smartphone.
    9.4 - Caso não queira executar no modo depuração.
        9.4.1 - Baixe na app store o aplicativo Expo Go https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US .
        9.4.2 - Feito o passo (6 - Execute o expo com o comando expo start), caso não apareça o QR code no próprio terminal aperte a tecla "w" para abrir o Metro em seu navegador. Abra o app Expo Go em seu smartphone e use o scaner de QR code para ler o QR code do terminal ou do Metro em seu navegador na porta padrão 19002. -> localhost:19002.
10 - Fim.

Extra: É possível gerar o arquivo .apk do projeto, caso tenha uma conta na Expo -> https://expo.dev/

Basta acessar a pasta do projeto e executar o comando "eas build -p android --profile preview". Será necessário efetuar o login com suas credenciais da Expo e após isso irá gerar um link para acompanhar o processo de build do apk, após isso é possível baixar o arquivo.