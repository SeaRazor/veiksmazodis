import words from '../data/a2_words.json'

export function getWords() {
    return words;
}

export function getTopics() {
    return Object.keys(words);
}

export function getTopicWords(topic) {
    if (!topic) return [];
    return words[topic];
}