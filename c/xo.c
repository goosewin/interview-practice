#include <stdio.h>
#include <stdbool.h>

bool xo(const char *str)
{
	int x = 0;
	int o = 0;

	for (int i = 0; i < strlen(str); i++)
	{
		if (str[i] == 'x' || str[i] == 'X')
			x++;
		if (str[i] == 'o' || str[i] == 'O')
			o++;
	}

	if (x == o)
		return 1;
	else
		return 0;
}
