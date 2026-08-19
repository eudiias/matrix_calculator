class MatrixOperations:
    def __init__(self, matrixA, matrixB):
        self._matrixA = matrixA
        self._matrixB = matrixB

    def add(self):
        #Verifica se as matrizes têm as mesmas dimensões antes de realizar a adição
        if len(self._matrixA) != len(self._matrixB) :
            raise ValueError("Matrices must have the same dimensions for addition.")
        if len(self._matrixA[0]) != len(self._matrixB[0]):
            raise ValueError("Matrices must have the same dimensions for addition.")

        # Calcula a soma das duas matrizes
        result = []
        for i in range(len(self._matrixA)):
            row = []
            for j in range(len(self._matrixA[i])):
                row.append(self._matrixA[i][j] + self._matrixB[i][j])
            result.append(row)

        #Retorna a matriz resultante da soma
        return result

    def subtract(self, other):
        # Implementation for subtracting two matrices
        pass

    def multiply(self, other):
        # Implementation for multiplying two matrices
        pass

    def scalar_multiply(self, scalar):
        # Implementation for multiplying a matrix by a scalar
        pass

    def transpose(self):
        # Implementation for transposing a matrix
        pass