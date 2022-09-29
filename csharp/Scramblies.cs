using System;
using System.Collections.Generic;
using System.Linq;

public class Scramblies 
{
    public static bool Scramble(string str1, string str2)
    {
        List<char> _str1 = str1.ToList();
        List<char> _str2 = str2.ToList();

        foreach (char c in _str2)
        {
            if (_str1.Contains(c)) {
                _str1.Remove(c);
                continue;
            }

            return false;
        }

        return true;
    }
}
