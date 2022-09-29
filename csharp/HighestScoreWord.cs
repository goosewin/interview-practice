public class Solution
{
    public static string High(string s)
    {
        string[] words = s.Split(' ');
        int max = 0, index = 0;

        for (int i = 0; i < words.Length; i++)
        {
            int score = 0;

            foreach (char c in words[i])
            {
                int asc = c - 96;
                score += asc;
            }

            if (score > max)
            {
                max = score;
                index = i;
            }
        }

        return words[index];
    }
}
