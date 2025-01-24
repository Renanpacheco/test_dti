Cenário: Verificando a página Sign in
    Contexto:
        Dado o usuário estar na página de sing in
    
    CT01: Header
        Então o usuário deve ver o banner no header
        E ver o número de  contato
        E ver o Botão de Contatc us
        E ver o Botão de Sign in

    CT02: Section 1
        Então o usuário deve ver o Logo
        E ver o Carrinho
        E ver o campo de pesqusa
        Quando o usuário digitar o termo "blouse" para pesquisa
        Então o usuário deve ver a opção "Blouses > Blouse"

    CT03: Menu
        Então o usuário deve ver um menu
        E ver a opão "WOMEN"
        E ver a opão "DRESSES"
        E ver a opão "T-SHIRTS"
        E ver a opão "BLOG"

    CT04: Navegação
        Então o usuário deve ver o seu caminho até essa página

    CT05: Identificador da página
        Então o usuário deve ver o título "AUTHENTiCATION"

    CT06: CREATE AN ACCOUNT
        Então o usuário deve ver o título "CREATE AN ACCOUNT"
        E ver o texto "Please enter your email address to create an account."
        E ver a label "Email address"
        E ver um campo para preencher
        E um botão "Create an account"

    CT07: Login
        Então o usuário deve ver o título "Already registered?"
        E ver as labels "Email address" e "Password"
        E ver dois campos para preencher
        E ver um link "Forgot your password?
        E um botão "Sign in" verde

    CT08: Footer
        Então ver o Footer

Cenário : Erros de login
    Contexto:
        Dado o usuário estar na página de sing in
        E tem uma conta válida
    
    CT01: Login em branco
        Quando o usuário não preenche os campos "Email address" e "Password"
        e clica no botao verde Sign in
        Então ver a mensagem "There is 1 error 1. An email address required."
    
    CT02: Clicando no campo "Email address" mas sem preencher
        Quando o usuário clica no campo de endereço de e-mail
        E clica fora do campo de endereço de e-mail
        Então o campo de endereço de e-mail muda para vermelho
    
    CT03: Login com erro no campo email
        Quando o usuário coloca uma entrada diferente de um endereço de e-mail
        E clica no botão verde "Sign in"
        Então vê uma mensagem "There is 1 error 1. Invalid email address."
        E a última entrada permanece no campo endereço de e-mail

    CT04: Email não cadastrado
        Quando o usuário coloca um endereço de e-mail não cadastrado
        E clica fora do campo
        Então o campo de endereço de e-mail muda para verde
        Quando o usuário clica no botão verde "Sign in"
        Então vê uma mensagem "There is 1 error 1.Password is required."
    
    CT05: Email correto mas sem senha
        Quando o usuário coloca um endereço de e-mail cadastrado
        E o usuário clica no campo de senha
        E clica fora do campo de senha
        Então o campo de senha fica vermelho
        E clica no botão verde "Sign in"
        Então vê uma mensagem "There is 1 error 1.Password is required."
    
    CT06: Senha com menos de 5 dígitos 
        Quando o usuário coloca um endereço de e-mail cadastrado
        E coloca uma senha com menos de 5 caracteres
        E o usuário clica no botão verde "Sign in"
        Então vê uma mensagem "There is 1 error 1. Invalid password."
        E a última senha está no campo senha

    Cenário: login com credenciais válidas
    Contexto:
        Dado que o usuário está na página de login
        E tem uma conta válida

    CT01: login com credenciais válidas
        Quando o usuário clica no campo de senha
        E o usuário coloca um e-mail correto no campo de endereço de e-mail
        Então o campo de endereço de e-mail fica verde
        Quando coloca uma senha correta no campo de senha
        E clica no botão verde "Sign in"
        Então o usuário será redirecionado para a página da minha conta
        E ver um botão de sair
        E ver seu nome no lado direito do botão "Sign out"