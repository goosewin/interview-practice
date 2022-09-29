using System;
using System.Collections.Generic;
using System.Linq;

public static class Solution
{
    static IEnumerable<string> GetCombinations(string s, Dictionary<char, IEnumerable<char>> substitutions)
    {
        IEnumerable<string> GetCombinations(string original, string current, int index)
        {
            if (index == original.Length)
                yield return current;
            else
                if (substitutions.TryGetValue(original[index], out var chars))
                    foreach (var c in chars)
                        foreach (var combination in GetCombinations(original, current + c, index + 1))
                            yield return combination;
        }

        if (string.IsNullOrEmpty(s))
            return Enumerable.Repeat(s, 1);

        return GetCombinations(s, string.Empty, 0);
    }

    public static List<string> GetPINs(string observed)
    {
        var dic = new Dictionary<char, IEnumerable<char>>
        {
            { '1', new[]{'1', '2', '4' } },
            { '2', new[]{'2', '1', '3', '5' } },        // ┌───┬───┬───┐
            { '3', new[]{'3', '2', '6' } },             // │ 1 │ 2 │ 3 │
            { '4', new[]{'4', '1', '5', '7' } },        // ├───┼───┼───┤
            { '5', new[]{'5', '2', '4', '6', '8' } },   // │ 4 │ 5 │ 6 │
            { '6', new[]{'6', '3', '5', '9' } },        // ├───┼───┼───┤
            { '7', new[]{'7', '4', '8' } },             // │ 7 │ 8 │ 9 │
            { '8', new[]{'8', '5', '7', '9', '0' } },   // └───┼───┼───┘
            { '9', new[]{'9', '6', '8' } },                 //│ 0 │
            { '0', new[]{'0', '8' } }                       //└───┘
        };

        List<string> lst = new List<string>();
        lst.AddRange(GetCombinations(observed, dic));
        return lst;
    }
}
