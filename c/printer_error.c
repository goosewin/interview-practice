#include <string.h>
#include <stdio.h>

char *printer_error(char *s)
{
	int count = 0;

	for (int i = 0; i < strlen(s); i++)
		if (s[i] > 109)
			count++;

	char *result = malloc(8);
	sprintf(result, "%d/%d", count, strlen(s));
	return result;
}
