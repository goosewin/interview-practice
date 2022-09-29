def expanded_form(num):
    result = []

    for i, digit in enumerate(str(num)[::-1]):
        if digit != '0':
            result.append(digit + ('0' * i))

    return ' + '.join(result[::-1])
