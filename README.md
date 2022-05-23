# bankapp-React-Native
<b>Pequeno projeto em react-native de um appbank.</b>

Para rodar este projeto em seu computador siga os passos a seguir.

<ol>
    <li>Caso não possua, Baixe e instale o nodejs em https://nodejs.org/en/download/. Para verificar execute o comando <b>node -v</b> no terminal.</li>
    <li>Caso não possua, Baixe e instale o git em https://git-scm.com/downloads. Para verificar execute o comando <b>git --version</b> no terminal.</li>
    <li>Clone este repositório usando o git, acesse alguma pasta em seu computador, abra o prompt de comando na mesma e digite o comando <b>git clone https://github.com/alvesil/bankapp-React-Native</b>.</li>
    <li>Acesse a pasta do projeto com o comando <b>cd ./bankapp-React-Native</b> .</li>
    <li>Instale as dependências dos módulos do node com o comando <b>npm install</b>. O npm é instalado com o nodejs. Verifique usando o comando <b>npm -v</b>.</li>
    <li>Execute o expo com o comando <b>expo start</b>.</li>
    <li>Você vai precisar de um emulador de Android ou seu próprio smartphone.</li>
    <li>Utilizando o Android.</li>
    <ol>
        <li>Baixe e instale o Android Studio em https://developer.android.com/studio?hl=pt&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45Y14c506cwulDcm_ZDhxDjJMGIzY2_wjM4UW3lgYlCUKdTN5ptAMoUaAutQEALw_wcB&gclsrc=aw.ds.</li>
        <li>Ao abrir o Android Studio, acesse o Device Manager e crie e inicie um Dispositivo Virtual, será necessário que o Android Studio baixe alguns arquivos.</li>
        <li>Após iniciado o dispositivo virtual, feito o passo <b>6</b> <br><i>6 - Execute o expo com o comando <b>expo start</b></i><br>volte ao terminal e digite <i>a<i> para abrir o app no dispositivo virtual.</li>
    </ol>
    <li>Utilizando seu smartphone.</li>
    <ol>
        <li>Obs: É necessário ativar o modo de depuração.</li>
        <li>Conecte seu aparelho ao computador com um cabo USB, e o modo de depuração ativado.</li>
        <li>Feito o passo <b>6</b> <br> <i> 6 - Execute o expo com o comando expo start</b></i> <br>volte ao terminal e digite <i>a</i> para abrir o app no seu smartphone.</li>
    </ol>
    <li>Caso não queira executar no modo depuração.</li>
    <ol>
        <li>Baixe na app store o aplicativo Expo Go https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US .</li>
        <li>Feito o passo <b>6</b> <br><i><b>6 - Execute o expo com o comando expo start</b></i><br> caso não apareça o QR code no próprio terminal aperte a tecla <i>w</i> para abrir o Metro em seu navegador. Abra o app Expo Go em seu smartphone e use o scaner de QR code para ler o QR code do terminal ou do Metro em seu navegador na porta padrão 19002. -> localhost:19002.</li>
    </ol>
</ol>
Extra: É possível gerar o arquivo .apk do projeto, caso tenha uma conta na Expo -> https://expo.dev/

Basta acessar a pasta do projeto e executar o comando <b>eas build -p android --profile preview</b>. Será necessário efetuar o login com suas credenciais da Expo e após isso irá gerar um link para acompanhar o processo de build do apk, após isso é possível baixar o arquivo.
