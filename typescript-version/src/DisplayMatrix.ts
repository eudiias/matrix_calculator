/**
 * Class responsible for displaying matrices in the console
 */
export class DisplayMatrix {
  private matrix: number[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  /**
   * Displays the matrix in a formatted way to the console
   */
  display(): void {
    if (!this.matrix || this.matrix.length === 0) {
      console.log("[ERROR] Matrix is empty or null");
      return;
    }

    for (let i = 0; i < this.matrix.length; i++) {
      let row = "[ ";
      if (this.matrix[i] && this.matrix[i].length > 0) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          row += `${this.matrix[i][j]} `;
        }
      }
      row += "]";
      console.log(row);
    }
  }
}
