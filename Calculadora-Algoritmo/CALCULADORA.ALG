Algoritmo "Calculadora"

Var
// Se��o de Declara��es das vari�veis 
numero1, numero2, opcao: inteiro
resultado: real




Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

enquanto opcao <> 5 fa�a

se (opcao  <= 4) entao
     Escreva("Digite o primeiro n�mero: ")
     Leia(numero1)
     Escreva("Digite o segundo n�mero: ")
     Leia(numero2)
FIMSE
     Escreval("Escolha uma op��o: ")
     Escreval("1 - Soma")
     Escreval("2 - Subtra��o")
     Escreval("3 - Multiplica��o")
     Escreval("4 - Divis�o")
     Escreval("5 - Sair da calculadora")
     Leia(opcao)


     ESCOLHA opcao
         CASO 1
             resultado := numero1 + numero2
             escreval("Resultado: ", resultado)
         CASO 2
             resultado := numero1 - numero2
             escreval("Resultado: ", resultado)
         CASO 3
             resultado := numero1 * numero2
             escreval("Resultado: ", resultado)
         CASO 4
             resultado := numero1 / numero2
             escreval("Resultado: ", resultado)
         CASO 5
             escreval("SAINDO DA CALCULADORA")
         OUTROCASO
             escreval("OP��O INV�LIDA")
     FIMESCOLHA
FIMENQUANTO
Fimalgoritmo
