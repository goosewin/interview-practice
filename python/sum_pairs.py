def sum_pairs(nums, s):
    remainders = {}
    
	for num in nums:
        if num in remainders.values():
            return [s - num, num]
        remainders[num] = s - num

    return None
