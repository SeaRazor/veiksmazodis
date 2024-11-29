import words from '../data/a2_words.json'


export function getTopics() {
    return Object.keys(words);
}


export function getWords(topic) {
    if (!topic) return [];
    if (topic === 'all') return Object.values(words).flat();
    return words[topic];

}

export function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export function checkWord(enteredWord, correctWord, direction) {
    let isCorrect;
    switch (direction) {
        case "forward":
            isCorrect = enteredWord.toLowerCase() === correctWord.translation.toLowerCase();
            if (!isCorrect && correctWord.synonyms) {
                isCorrect = correctWord.synonyms.some(synonym => synonym.toLowerCase() === enteredWord.toLowerCase());
            }
            break;
        case "reverse":
            isCorrect = enteredWord.toLowerCase() === correctWord.word.toLowerCase();
            break;

    }
    return isCorrect;
}