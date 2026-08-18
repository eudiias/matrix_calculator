class DisplayMatrix:
    def __init__(self, matrix):
        self.matrix = matrix

    def display(self):
        for i in range(len(self.matrix)):
            print("[", end=" ")
            for j in range(len(self.matrix[i])):
                print(f"{self.matrix[i][j]} ", end=" ")
            print("]")