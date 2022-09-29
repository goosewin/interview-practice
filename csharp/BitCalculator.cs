using System;

public class Solution
{
    public static int Calculate(string num1, string num2)
    {
        return BinToDecimal(num1) + BinToDecimal(num2);
    }

    public static int BinToDecimal(string num)
    {
        int result = 0, count = 0;

        for (int i = num.Length-1; i >= 0; --i)
        {
            if (num[i] == '1')
                result += (int)Math.Pow(2, count);

            count++;
        }

        return result;
    }
}
