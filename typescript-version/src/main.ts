import * as readlineSync from "readline-sync";
import { MatrixOperations } from "./MatrixOperations";
import { DisplayMatrix } from "./DisplayMatrix";

/**
 * Creates a matrix by prompting the user for each value
 */
function createMatrix(rows: number, cols: number): number[][] {
  const matrix: number[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      const value = readlineSync.questionInt(`Write the value for position (${i}, ${j}): `);
      row.push(value);
    }
    matrix.push(row);
  }

  return matrix;
}

/**
 * Prompts user to input matrix dimensions and creates the matrix
 */
function inputMatrix(): number[][] {
  const rows = readlineSync.questionInt("Write a number of lines: ");
  const cols = readlineSync.questionInt("Write a number of columns: ");

  return createMatrix(rows, cols);
}

/**
 * Main application entry point
 */
function main(): void {
  console.log("===== Matrix Calculator =====\n");

  let matrixA: number[][] | null = null;
  let matrixB: number[][] | null = null;

  let running = true;
  while (running) {
    try {
      console.log("1. Create a matrix A");
      console.log("2. Create a matrix B");
      console.log("3. Display matrix A");
      console.log("4. Display matrix B");
      console.log("5. Add matrices A and B");
      console.log("6. Subtract matrices A and B");
      console.log("7. Multiply matrices A and B");
      console.log("8. Multiply matrix A by a scalar");
      console.log("9. Transpose matrix A");
      console.log("0. Exit\n");

      const option = readlineSync.questionInt("Select an option: ");

      switch (option) {
        case 1:
          matrixA = inputMatrix();
          console.log("\nMatrix A created successfully!\n");
          break;

        case 2:
          matrixB = inputMatrix();
          console.log("\nMatrix B created successfully!\n");
          break;

        case 3:
          if (matrixA === null) {
            console.log("\nMatrix A has not been created yet.\n");
          } else {
            console.log("\n===== Matrix A: =====");
            console.log(`Dimensions: ${matrixA.length} x ${matrixA[0]?.length || 0}`);
            new DisplayMatrix(matrixA).display();
            console.log("=====================\n");
          }
          break;

        case 4:
          if (matrixB === null) {
            console.log("\nMatrix B has not been created yet.\n");
          } else {
            console.log("\n===== Matrix B: =====");
            console.log(`Dimensions: ${matrixB.length} x ${matrixB[0]?.length || 0}`);
            new DisplayMatrix(matrixB).display();
            console.log("=====================\n");
          }
          break;

        case 5:
          if (matrixA === null || matrixB === null) {
            console.log("\nBoth matrices A and B must be created first.\n");
          } else {
            try {
              const result = new MatrixOperations(matrixA, matrixB).add();
              console.log("\nResult of A + B:");
              new DisplayMatrix(result).display();
              console.log();
            } catch (error) {
              console.log(`\nError: ${(error as Error).message}\n`);
            }
          }
          break;

        case 6:
          if (matrixA === null || matrixB === null) {
            console.log("\nBoth matrices A and B must be created first.\n");
          } else {
            try {
              const result = new MatrixOperations(matrixA, matrixB).subtract();
              console.log("\nResult of A - B:");
              new DisplayMatrix(result).display();
              console.log();
            } catch (error) {
              console.log(`\nError: ${(error as Error).message}\n`);
            }
          }
          break;

        case 7:
          if (matrixA === null || matrixB === null) {
            console.log("\nBoth matrices A and B must be created first.\n");
          } else {
            try {
              const result = new MatrixOperations(matrixA, matrixB).multiply();
              console.log("\nResult of A × B:");
              new DisplayMatrix(result).display();
              console.log();
            } catch (error) {
              console.log(`\nError: ${(error as Error).message}\n`);
            }
          }
          break;

        case 8:
          if (matrixA === null) {
            console.log("\nMatrix A has not been created yet.\n");
          } else {
            const scalar = readlineSync.questionInt("What is the scalar number?: ");
            const result = new MatrixOperations(matrixA).scalarMultiply(scalar);
            console.log(`\nResult of A × ${scalar}:`);
            new DisplayMatrix(result).display();
            console.log();
          }
          break;

        case 9:
          if (matrixA === null) {
            console.log("\nMatrix A has not been created yet.\n");
          } else {
            const result = new MatrixOperations(matrixA).transpose();
            console.log("\nTranspose of A:");
            new DisplayMatrix(result).display();
            console.log();
          }
          break;

        case 0:
          console.log("Exiting...");
          running = false;
          break;

        default:
          console.log("\nInvalid option. Please try again.\n");
      }
    } catch (error) {
      console.log(`\nError: ${(error as Error).message}\n`);
    }
  }
}

main();
