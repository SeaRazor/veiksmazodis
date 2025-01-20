import words from '../data/a2_words.json'


export function getTopics() {
    return Object.keys(words);
}


export function getWords(topic) {
    if (!topic) return [];
    const seen = new Set();
    const topicWords = topic === 'all' ? Object.values(words).flat() : words[topic];
    return topicWords.filter(item => {
        const duplicate = seen.has(item.word);
        seen.add(item.word);
        return !duplicate;
    });
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
                isCorrect = correctWord.synonyms.some(synonym => synonym.toLowerCase().trim() === enteredWord.toLowerCase().trim());
            }
            break;
        case "reverse":
            isCorrect = enteredWord.toLowerCase() === correctWord.word.toLowerCase();
            break;

    }
    return isCorrect;
}