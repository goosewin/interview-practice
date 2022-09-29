using System;
using System.Text;

public class Diamond
{
    public static string print(int n)
    {
        if (n % 2 == 0 || n < 0)
            return null;

        StringBuilder sb = new StringBuilder();
        int _n = 0;

        while (_n <= n)
        {
            for (int i = 0; i < (n-_n)/2; i++)
                sb.Append(' ');
            for (int i = 0; i <= _n; i++)
                sb.Append('*');
            sb.Append('\n');
            _n += 2;
        }
        _n -= 4;
        while (_n >= 0)
        {
            for (int i = 0; i < (n - _n) / 2; i++)
                sb.Append(' ');
            for (int i = 0; i <= _n; i++)
                sb.Append('*');
            sb.Append('\n');
            _n -= 2;
        }

        return sb.ToString();
    }
}
