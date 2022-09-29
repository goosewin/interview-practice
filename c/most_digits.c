#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int find_longest(int *numbers, size_t numbers_size)
{
	int number = 0, max = 1, result = 0;
	for (int i = 0; i < numbers_size; i++)
	{
		number = floor(log10(abs(numbers[i]))) + 1;
		if (number > max)
		{
			result = i;
			max = number;
		}
	}

	return numbers[result];
}
