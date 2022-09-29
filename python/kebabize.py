def kebabize(string):
    result = []
    
    try:
        for c in string:
            if c.islower():
                result.append(c)
            elif c.isupper():
                if (len(result) != 0):
                    result.append('-')
                result.append(c.lower())

    except:
        print('Incorrect input.')

    else:
        return ''.join(result)
