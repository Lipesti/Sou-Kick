codigo = input("Digite o código do produto: ")
nome = input("Digite o nome do produto: ")
quantidade = int(input("Digite a quantidade: "))
preco = float(input("Digite o preço unitário: "))

total = quantidade * preco

print("Código do produto:", codigo)
print("Nome do produto:", nome)
print("Quantidade:", quantidade)
print("Preço unitário: R$", preco)
print("Valor total da compra: R$", total)
