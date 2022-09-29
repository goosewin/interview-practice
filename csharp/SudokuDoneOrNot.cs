public class Sudoku
{
    public static string DoneOrNot(int[][] board)
    {
        for (int i = 0; i < board.Length; i++)
        {
            int row = 0, col = 0;
            for (int j = 0; j < board.Length; j++)
            {
                row += board[i][j];
                col += board[j][i];

                if ((i + 3) % 3 == 0 && (j + 3) % 3 == 0)
                {
                    bool[] sqr = new bool[10];

                    for (int m = i; m < i + 3; m++)
                    {
                        for (int n = j; n < j + 3; n++)
                        {
                            if (sqr[board[m][n]] & board[m][n] > 0)
                                return "Try again!";

                            sqr[board[m][n]] = true;
                        }
                    }
                }
            }
            if (row != 45 || col != 45)
                return "Try again!";
        }
        return "Finished!";
    }
}
