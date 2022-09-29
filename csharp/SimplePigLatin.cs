using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static string PigIt(string str)
    {
        string[] words = str.Split(' ');
        StringBuilder sb = new StringBuilder();

        foreach (string word in words)
        {
            List<char> tmpArr = word.ToList();
            tmpArr.Add(tmpArr[0]);
            tmpArr.Remove(tmpArr[0]);
            tmpArr.AddRange("ay ");
            sb.Append(tmpArr.ToArray());
        }
        return sb.Remove(sb.Length-1, 1).ToString();
    }
}
