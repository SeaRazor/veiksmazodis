import verbs_simple from '../data/verbs_simple.json';
import verbs_reflex from '../data/verbs_reflex.json';

export function getRandomVerb(isDirect = true) {
    const verbs = isDirect ? verbs_simple : verbs_reflex;
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
}

export function searchVerb(searchString, isDirect = true) {
    const verbs = isDirect ? verbs_simple : verbs_reflex;
    const searchResultByInfinitive = verbs.find((v) => v.infinitive.toUpperCase() === searchString.toUpperCase());
    if (searchResultByInfinitive) {
        return searchResultByInfinitive;
    }
    const searchResultByTranslation = verbs.find((v) => v.translation.toUpperCase() === searchString.toUpperCase());
    if (searchResultByTranslation) {
        return searchResultByTranslation;
    }
    return null;

}

