import words from '../data/a2_words.json'


export function getTopics() {
    return Object.keys(words);
}


export function getWords(topic) {
    if (!topic) return [];
    const seen = new Set();
    const topicWords = topic === 'all' ? Object.values(words).flat() : words[topic];
    return topicWords.filter(item => {
        const duplicate = seen.has(item.word + item.comment);
        seen.add(item.word + item.comment);
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

export function checkWordGracefully(enteredWord, correctWord, direction) {
    /*let checkResult;
    let isCorrect = checkWord(enteredWord, correctWord, direction);
    if (isCorrect) {
        return 'correct';
    }*/
    const wordToCompare = direction === 'forward' ? correctWord.translation : correctWord.word;
    if (enteredWord.toLowerCase() === wordToCompare.toLowerCase()) {
        return 'correct';
    }
    if (correctWord.synonyms) {
        if (correctWord.synonyms.some(synonym => synonym.toLowerCase().trim() === enteredWord.toLowerCase().trim())) {
            return 'correct';
        }
    }

    const normalizedEnteredWord = replaceDiacriticSymbols(enteredWord);
    const normalizedCorrectWord = replaceDiacriticSymbols(wordToCompare);
    if (normalizedEnteredWord.toLowerCase() === normalizedCorrectWord.toLowerCase()) {
        return 'warning';
    }
    return 'incorrect';
}

function replaceDiacriticSymbols(word) {
    const diacriticReplacements = {
        "ą": "a",
        "ę": "e",
        "ė": "e",
        "į": "i",
        "ų": "u",
        "ū": "u"
    }
    const result = word.replace(/[ąęėįųū]/g, m => diacriticReplacements[m]);
    return result;
}