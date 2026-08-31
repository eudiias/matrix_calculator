import pytest

from matrix import MatrixOperations


# ---------- add ----------

def test_add_returns_correct_sum():
    a = [[1, 2], [3, 4]]
    b = [[5, 6], [7, 8]]
    result = MatrixOperations(a, b).add()
    assert result == [[6, 8], [10, 12]]


def test_add_raises_when_different_number_of_rows():
    a = [[1, 2], [3, 4]]
    b = [[1, 2]]
    with pytest.raises(ValueError):
        MatrixOperations(a, b).add()


def test_add_raises_when_different_number_of_columns():
    a = [[1, 2], [3, 4]]
    b = [[1, 2, 3], [4, 5, 6]]
    with pytest.raises(ValueError):
        MatrixOperations(a, b).add()


# ---------- subtract ----------

def test_subtract_returns_correct_difference():
    a = [[5, 6], [7, 8]]
    b = [[1, 2], [3, 4]]
    result = MatrixOperations(a, b).subtract()
    assert result == [[4, 4], [4, 4]]


def test_subtract_raises_when_different_number_of_rows():
    a = [[1, 2], [3, 4]]
    b = [[1, 2]]
    with pytest.raises(ValueError):
        MatrixOperations(a, b).subtract()


def test_subtract_raises_when_different_number_of_columns():
    a = [[1, 2], [3, 4]]
    b = [[1, 2, 3], [4, 5, 6]]
    with pytest.raises(ValueError):
        MatrixOperations(a, b).subtract()


# ---------- multiply ----------

def test_multiply_returns_correct_product():
    a = [[1, 2], [3, 4]]
    b = [[5, 6], [7, 8]]
    result = MatrixOperations(a, b).multiply()
    assert result == [[19, 22], [43, 50]]


def test_multiply_non_square_matrices():
    a = [[1, 2, 3], [4, 5, 6]]  # 2x3
    b = [[7, 8], [9, 10], [11, 12]]  # 3x2
    result = MatrixOperations(a, b).multiply()
    assert result == [[58, 64], [139, 154]]


def test_multiply_raises_when_dimensions_are_incompatible():
    a = [[1, 2], [3, 4]]
    b = [[1, 2], [3, 4], [5, 6]]  # 3x2, incompatible with 2x2
    with pytest.raises(ValueError):
        MatrixOperations(a, b).multiply()


# ---------- scalar_multiply ----------

def test_scalar_multiply_returns_correct_result():
    a = [[1, 2], [3, 4]]
    result = MatrixOperations(a).scalar_multiply(2)
    assert result == [[2, 4], [6, 8]]


def test_scalar_multiply_by_zero():
    a = [[1, 2], [3, 4]]
    result = MatrixOperations(a).scalar_multiply(0)
    assert result == [[0, 0], [0, 0]]


def test_scalar_multiply_by_negative_number():
    a = [[1, -2], [3, 4]]
    result = MatrixOperations(a).scalar_multiply(-1)
    assert result == [[-1, 2], [-3, -4]]


# ---------- transpose ----------

def test_transpose_square_matrix():
    a = [[1, 2], [3, 4]]
    result = MatrixOperations(a).transpose()
    assert result == [[1, 3], [2, 4]]


def test_transpose_non_square_matrix():
    a = [[1, 2, 3], [4, 5, 6]]  # 2x3
    result = MatrixOperations(a).transpose()
    assert result == [[1, 4], [2, 5], [3, 6]]


def test_transpose_single_row_matrix():
    a = [[1, 2, 3]]
    result = MatrixOperations(a).transpose()
    assert result == [[1], [2], [3]]