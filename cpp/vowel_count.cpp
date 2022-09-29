#include <string>
#include <algorithm>

using namespace std;

int getCount(const string &str)
{
	return count_if(str.begin(), str.end(), [](int i)
									{ return i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'; });
}

int getCount2(const string &inputStr)
{
	int num_vowels = 0;
	string str = inputStr;

	for (char &c : str)
		if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
			num_vowels++;

	return num_vowels;
}
