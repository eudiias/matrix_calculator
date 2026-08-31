from display_matrix import DisplayMatrix


def test_display_prints_expected_format_for_square_matrix(capsys):
    matrix = [[1, 2], [3, 4]]
    DisplayMatrix(matrix).display()
    captured = capsys.readouterr()
    assert captured.out == "[ 1  2  ]\n[ 3  4  ]\n"


def test_display_prints_expected_format_for_non_square_matrix(capsys):
    matrix = [[1, 2, 3], [4, 5, 6]]
    DisplayMatrix(matrix).display()
    captured = capsys.readouterr()
    assert captured.out == "[ 1  2  3  ]\n[ 4  5  6  ]\n"


def test_display_prints_one_line_per_row(capsys):
    matrix = [[1], [2], [3]]
    DisplayMatrix(matrix).display()
    captured = capsys.readouterr()
    lines = captured.out.splitlines()
    assert len(lines) == 3
    assert lines == ["[ 1  ]", "[ 2  ]", "[ 3  ]"]


def test_display_empty_matrix_prints_nothing(capsys):
    DisplayMatrix([]).display()
    captured = capsys.readouterr()
    assert captured.out == ""