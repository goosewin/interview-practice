def two_sum(numbers, target):
	index_map = {}
	
	for i in range(len(numbers)):
		number = numbers[i]
		pair = target - number
		if pair in index_map:
			return (index_map[pair], i)
		index_map[number] = i
	
	return -1
