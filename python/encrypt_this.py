def encrypt_this(text):
  	result = []

  	for word in text.split():
		word = list(word)
		word[0] = str(ord(word[0]))

	if len(word) > 1:
		word[1], word[-1] = word[-1], word[1]

	result.append(''.join(word))
  	return ' '.join(result)
