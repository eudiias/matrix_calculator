class MatrixOperations:
    def __init__(self, matrixA, matrixB):
        self._matrixA = matrixA
        self._matrixB = matrixB

    def __init__(self, matrixA):
        self._matrixA = matrixA

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

    def subtract(self):
        #Verifica se as matrizes têm as mesmas dimensões antes de realizar a subtração
        if len(self._matrixA) != len(self._matrixB) :
            raise ValueError("Matrices must have the same dimensions for subtraction.")
        if len(self._matrixA[0]) != len(self._matrixB[0]):
            raise ValueError("Matrices must have the same dimensions for subtraction.")

        # Calcula a subtração das duas matrizes
        result = []
        for i in range(len(self._matrixA)):
            row = []
            for j in range(len(self._matrixA[i])):
                row.append(self._matrixA[i][j] - self._matrixB[i][j])
            result.append(row)

        #Retorna a matriz resultante da subtração
        return result

    def multiply(self):
        # Verifica se as matrizes podem ser multiplicadas
        if len(self._matrixA[0]) != len(self._matrixB):
            raise ValueError("Incompatible matrix dimensions for multiplication.")

        # Calcula a multiplicação das duas matrizes
        result = []
        for i in range (len(self._matrixA)):
            row = []
            for j in range(len(self._matrixB[0])):
                sum_product = 0
                for k in range(len(self._matrixA[0])):
                    sum_product += self._matrixA[i][k] * self._matrixB[k][j]
                row.append(sum_product)
            result.append(row)
        return result

    def scalar_multiply(self, scalar):
        result = []

        for i in range(len(self._matrixA)):
            row = []
            for j in range(len(self._matrixA[0])):
                row.append(self._matrixA[i][j] * scalar)
            result.append(row)

        return result

    def transpose(self):
        rows = len(self._matrixA)
        cols = len(self._matrixA[0])

        result = []

        for j in range(cols):
            row = []

            for i in range(rows):
                row.append(self._matrixA[i][j])

            result.append(row)

        return result