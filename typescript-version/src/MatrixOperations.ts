/**
 * Class responsible for performing mathematical operations on matrices
 */
export class MatrixOperations {
  private matrixA: number[][];
  private matrixB: number[][] | null;

  constructor(matrixA: number[][], matrixB: number[][] | null = null) {
    this.matrixA = matrixA;
    this.matrixB = matrixB;
  }

  /**
   * Adds two matrices
   * @throws Error if matrices don't have the same dimensions
   */
  add(): number[][] {
    if (!this.matrixB) {
      throw new Error("Matrix B is required for addition.");
    }

    if (this.matrixA.length !== this.matrixB.length) {
      throw new Error("Matrices must have the same dimensions for addition.");
    }

    if (this.matrixA[0].length !== this.matrixB[0].length) {
      throw new Error("Matrices must have the same dimensions for addition.");
    }

    const result: number[][] = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.matrixA[i].length; j++) {
        row.push(this.matrixA[i][j] + this.matrixB[i][j]);
      }
      result.push(row);
    }

    return result;
  }

  /**
   * Subtracts matrix B from matrix A
   * @throws Error if matrices don't have the same dimensions
   */
  subtract(): number[][] {
    if (!this.matrixB) {
      throw new Error("Matrix B is required for subtraction.");
    }

    if (this.matrixA.length !== this.matrixB.length) {
      throw new Error("Matrices must have the same dimensions for subtraction.");
    }

    if (this.matrixA[0].length !== this.matrixB[0].length) {
      throw new Error("Matrices must have the same dimensions for subtraction.");
    }

    const result: number[][] = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.matrixA[i].length; j++) {
        row.push(this.matrixA[i][j] - this.matrixB[i][j]);
      }
      result.push(row);
    }

    return result;
  }

  /**
   * Multiplies two matrices
   * @throws Error if matrices have incompatible dimensions
   */
  multiply(): number[][] {
    if (!this.matrixB) {
      throw new Error("Matrix B is required for multiplication.");
    }

    if (this.matrixA[0].length !== this.matrixB.length) {
      throw new Error("Incompatible matrix dimensions for multiplication.");
    }

    const result: number[][] = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.matrixB[0].length; j++) {
        let sumProduct = 0;
        for (let k = 0; k < this.matrixA[0].length; k++) {
          sumProduct += this.matrixA[i][k] * this.matrixB[k][j];
        }
        row.push(sumProduct);
      }
      result.push(row);
    }

    return result;
  }

  /**
   * Multiplies matrix A by a scalar value
   */
  scalarMultiply(scalar: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.matrixA[i].length; j++) {
        row.push(this.matrixA[i][j] * scalar);
      }
      result.push(row);
    }

    return result;
  }

  /**
   * Transposes matrix A
   */
  transpose(): number[][] {
    const rows = this.matrixA.length;
    const cols = this.matrixA[0].length;
    const result: number[][] = [];

    for (let j = 0; j < cols; j++) {
      const row: number[] = [];
      for (let i = 0; i < rows; i++) {
        row.push(this.matrixA[i][j]);
      }
      result.push(row);
    }

    return result;
  }
}
