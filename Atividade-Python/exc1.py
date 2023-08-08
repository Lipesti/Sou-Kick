def soma_dois_numeros():
    while True:
        num1 = float(input('Digite o primeiro número: '))
        num2 = float(input('Digite o segundo número: '))
        soma = num1 + num2
        print(f'A soma dos valores {num1:.0f} + {num2:.0f} é = {soma:.2f}')
        
        escolha = input("Deseja fazer outra soma? (s/n) ")
        if escolha.lower() == "n":
                break
soma_dois_numeros()