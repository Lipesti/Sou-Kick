Algoritmo "Calculadora"

Var
// Seção de Declarações das variáveis 
numero1, numero2, opcao: inteiro
resultado: real




Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

enquanto opcao <> 5 faça

se (opcao  <= 4) entao
     Escreva("Digite o primeiro número: ")
     Leia(numero1)
     Escreva("Digite o segundo número: ")
     Leia(numero2)
FIMSE
     Escreval("Escolha uma opção: ")
     Escreval("1 - Soma")
     Escreval("2 - Subtração")
     Escreval("3 - Multiplicação")
     Escreval("4 - Divisão")
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
             escreval("OPÇÃO INVÁLIDA")
     FIMESCOLHA
FIMENQUANTO
Fimalgoritmo
