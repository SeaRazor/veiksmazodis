import verbs_simple from '../data/verbs_simple.json';

export function getRandomVerb() {
    const randomIndex = Math.floor(Math.random() * verbs_simple.length);
    return verbs_simple[randomIndex];
}

export function searchVerb(searchString) {
    const searchResultByInfinitive = verbs_simple.find((v) => v.infinitive.toUpperCase() === searchString.toUpperCase());
    if (searchResultByInfinitive) {
        return searchResultByInfinitive;
    }
    const searchResultByTranslation = verbs_simple.find((v) => v.translation.toUpperCase() === searchString.toUpperCase());
    if (searchResultByTranslation) {
        return searchResultByTranslation;
    }
    return null;

}

