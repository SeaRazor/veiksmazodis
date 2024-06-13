import nouns_100 from '../data/nouns_100.json';

export function getRandomNoun() {
    const randomIndex = Math.floor(Math.random() * nouns_100.length);
    return nouns_100[randomIndex];
}

export function searchNoun(searchString) {
    const searchResultByNoun = nouns_100.find((v) => v.noun.toUpperCase() === searchString.toUpperCase());
    if (searchResultByNoun) {
        return searchResultByNoun;
    }
    const searchResultByTranslation = nouns_100.find((v) => v.translation.toUpperCase() === searchString.toUpperCase());
    if (searchResultByTranslation) {
        return searchResultByTranslation;
    }
    return null;
}