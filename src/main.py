from display_matrix import DisplayMatrix
from matrix import MatrixOperations


def create_matrix(rows, cols):
    matrix = []

    for i in range(rows):
        row = []

        for j in range(cols):
            value = int(input(f"Write the value for position ({i}, {j}): "))
            row.append(value)

        matrix.append(row)

    return matrix


def input_matrix():
    rows = int(input("Write a number of lines: "))
    cols = int(input("Write a number of columns: "))

    return create_matrix(rows, cols)


print("===== Matrix Calculator =====\n")


while True:
    try:
        print("1. Create a matrix A")
        print("2. Create a matrix B")
        print("3. Display matrix A")
        print("4. Display matrix B")
        print("5. Add matrices A and B")
        print("6. Subtract matrices A and B")
        print("7. Multiply matrices A and B")
        print("8. Multiply matrix A by a scalar")
        print("9. Transpose matrix A")
        print("0. Exit\n")

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

            case 5:
                result = MatrixOperations(matrixA, matrixB).add()
                DisplayMatrix(result).display()

            case 6:
                result = MatrixOperations(matrixA, matrixB).subtract()
                DisplayMatrix(result).display()

            case 7:
                result = MatrixOperations(matrixA, matrixB).multiply()
                DisplayMatrix(result).display()

            case 8:
                scalar = int(input("What is the scalar number?: "))
                result = MatrixOperations(matrixA).scalar_multiply(scalar)
                DisplayMatrix(result).display()

            case 9:
                result = MatrixOperations(matrixA).transpose()
                DisplayMatrix(result).display()

            case 0:
                print("Exiting...")
                break

            case _:
                print("Invalid option. Please try again.")
    except ValueError as e:
        print(f"\nError: {e}")