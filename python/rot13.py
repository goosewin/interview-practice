def rot13(message):
    result = ""
    for i in range(len(message)):
        char = message[i]
        if char.isalpha():
            if char.isupper():
                result += chr((ord(char) - 52) % 26 + 65)
            else:
                result += chr((ord(char) - 84) % 26 + 97)
        else:
            result += char
    return result
