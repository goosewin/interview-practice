using System.Text;

public class Solution
{
    public static string Factorial(int n)
    {
        int[] res = new int[500];
        res[0] = 1;
        int res_size = 1;
        StringBuilder sb = new StringBuilder();

        for (int x = 2; x <= n; x++)
            res_size = Mul(x, res, res_size);

        for (int i = res_size - 1; i >= 0; i--)
            sb.Append(res[i]);

        return sb.ToString();
    }

    static int Mul(int x, int[] res, int res_size)
    {
        int carry = 0;

        for (int i = 0; i < res_size; i++)
        {
            int prod = res[i] * x + carry;
            res[i] = prod % 10;
            carry = prod / 10;
        }

        while (carry != 0)
        {
            res[res_size] = carry % 10;
            carry /= 10;
            res_size++;
        }

        return res_size;
    }
}
