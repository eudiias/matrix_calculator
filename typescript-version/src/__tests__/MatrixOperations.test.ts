import { MatrixOperations } from "../MatrixOperations";

describe("MatrixOperations", () => {
  describe("add", () => {
    it("should add two matrices correctly", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];
      const matrixB = [
        [5, 6],
        [7, 8],
      ];

      const result = new MatrixOperations(matrixA, matrixB).add();

      expect(result).toEqual([
        [6, 8],
        [10, 12],
      ]);
    });

    it("should throw error when matrices have different dimensions", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];
      const matrixB = [[1, 2, 3]];

      expect(() => {
        new MatrixOperations(matrixA, matrixB).add();
      }).toThrow("Matrices must have the same dimensions for addition.");
    });
  });

  describe("subtract", () => {
    it("should subtract two matrices correctly", () => {
      const matrixA = [
        [5, 6],
        [7, 8],
      ];
      const matrixB = [
        [1, 2],
        [3, 4],
      ];

      const result = new MatrixOperations(matrixA, matrixB).subtract();

      expect(result).toEqual([
        [4, 4],
        [4, 4],
      ]);
    });

    it("should throw error when matrices have different dimensions", () => {
      const matrixA = [[1, 2]];
      const matrixB = [
        [1, 2],
        [3, 4],
      ];

      expect(() => {
        new MatrixOperations(matrixA, matrixB).subtract();
      }).toThrow("Matrices must have the same dimensions for subtraction.");
    });
  });

  describe("multiply", () => {
    it("should multiply two matrices correctly", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];
      const matrixB = [
        [5, 6],
        [7, 8],
      ];

      const result = new MatrixOperations(matrixA, matrixB).multiply();

      expect(result).toEqual([
        [19, 22],
        [43, 50],
      ]);
    });

    it("should throw error when matrices have incompatible dimensions", () => {
      const matrixA = [[1, 2, 3]];
      const matrixB = [
        [1, 2],
        [3, 4],
      ];

      expect(() => {
        new MatrixOperations(matrixA, matrixB).multiply();
      }).toThrow("Incompatible matrix dimensions for multiplication.");
    });
  });

  describe("scalarMultiply", () => {
    it("should multiply matrix by scalar correctly", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];

      const result = new MatrixOperations(matrixA).scalarMultiply(2);

      expect(result).toEqual([
        [2, 4],
        [6, 8],
      ]);
    });

    it("should handle zero scalar", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];

      const result = new MatrixOperations(matrixA).scalarMultiply(0);

      expect(result).toEqual([
        [0, 0],
        [0, 0],
      ]);
    });
  });

  describe("transpose", () => {
    it("should transpose matrix correctly", () => {
      const matrixA = [
        [1, 2, 3],
        [4, 5, 6],
      ];

      const result = new MatrixOperations(matrixA).transpose();

      expect(result).toEqual([
        [1, 4],
        [2, 5],
        [3, 6],
      ]);
    });

    it("should transpose square matrix correctly", () => {
      const matrixA = [
        [1, 2],
        [3, 4],
      ];

      const result = new MatrixOperations(matrixA).transpose();

      expect(result).toEqual([
        [1, 3],
        [2, 4],
      ]);
    });
  });
});
