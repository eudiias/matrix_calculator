class DisplayMatrix:
    def __init__(self, matrix):
        self._matrix = matrix

    def display(self):
        for i in range(len(self._matrix)):
            print("[", end=" ")
            for j in range(len(self._matrix[i])):
                print(f"{self._matrix[i][j]} ", end=" ")
            print("]")