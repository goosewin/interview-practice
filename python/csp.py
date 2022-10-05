def closest_sum_pair(a1, a2, target):
    a1_sorted = sorted(a1)
    a2_sorted = sorted(a2)

    ans = (a1_sorted[0], a2_sorted[0])
    smallest_diff = abs(a1_sorted[0] + a2_sorted[0] - target)
    
    i = 0
    j = len(a2_sorted) - 1
    while i < len(a1_sorted) and j >= 0:
        v1 = a1_sorted[i]
        v2 = a2_sorted[j]
        current_diff = v1 + v2 - target
        
        if abs(current_diff) < smallest_diff:
            smallest_diff = abs(current_diff)
            ans = (v1, v2)

        if current_diff == 0:
            return ans
        elif current_diff < 0:
            i += 1
        else:
            j -= 1
    
    return ans

a1 = [-4, 6, 3, 5, 11, 4]
a2 = [16, -2, 14, 9, 6, 8]
a_target = 24

print(closest_sum_pair(a1, a2, a_target))
