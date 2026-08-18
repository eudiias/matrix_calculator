from display_matrix import DisplayMatrix


# Cria uma função para criar a matriz com base no número 
# de linhas e colunas fornecidos pelo usuário
def create_matrix(rows, cols):
    matrix = []

    for i in range(rows):
        row = []

        for j in range(cols):
            value = int(input(f"Write the value for position ({i}, {j}): "))
            row.append(value)
        matrix.append(row)

    return matrix

#Cria uma função para receber a matriz do usuário 
def input_matrix():
    rows = int(input("Write a number of lines: "))
    cols = int(input("Write a number of columns: "))

    matrix = create_matrix(rows, cols)

    return matrix

print("===== Matrix Calculator =====\n")


while True:
    print("1. Create a matrix A")
    print("2. Create a matrix B")
    print("3. Display matrix A")
    print("4. Display matrix B")
    print("5. Add matrices A and B")
    print("6. Subtract matrices A and B")
    print("7. Multiply matrices A and B")
    print("8. Multiply matrix A by a scalar")
    print("9. Transpose matrix A")
    print("10. Exit\n")
    option = int(input("Select an option: "))

    match option:
        case 1:
            matrixA = input_matrix()
        case 2:
            matrixB = input_matrix()
        case 3:
            DisplayMatrix(matrixA).display()
        case 4:
            DisplayMatrix(matrixB).display()
        case 0:
            print("Exiting...")
            break
        case _:
            print("Invalid option. Please try again.")
