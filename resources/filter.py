import json

def load_words():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())

    return valid_words


if __name__ == '__main__':
    english_words = load_words()
    # demo print
    c = 0
    new_list = []
    for word in english_words:
        if len(word) == 5:
            new_list.append(word)
            c += 1

    with open('five_letter_words.json', 'w') as f:
        json.dump(new_list, f)
    print(c)
