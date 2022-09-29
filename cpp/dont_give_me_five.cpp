bool contains_five(int number)
{
	while (number)
	{
		int curr_digit = number % 10;
		if (curr_digit == 5 || curr_digit == -5)
			return true;
		number /= 10;
	}

	return false;
}

int dont_give_me_five(int start, int end)
{
	int result = 0;

	for (int i = start; i <= end; i++)
		if (!contains_five(i))
			result++;

	return result;
}
