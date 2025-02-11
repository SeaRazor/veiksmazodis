import verbs_simple from '../data/verbs_simple.json';
import verbs_reflex from '../data/verbs_reflex.json';

/*import * as fs from 'node:fs';*/
import {getDataFromOpenAI} from "@/app/utils/openai";

export function getRandomVerb(isDirect = true) {
    const verbs = isDirect ? verbs_simple : verbs_reflex;
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
}


export async function searchVerb(searchString, isDirect = true) {
    const verbs = isDirect ? verbs_simple : verbs_reflex;
    const searchResultByInfinitive = verbs.find((v) => v.infinitive.toUpperCase() === searchString.toUpperCase());
    if (searchResultByInfinitive) {
        return searchResultByInfinitive;
    }
    const searchResultByTranslation = verbs.find((v) => v.translation.toUpperCase() === searchString.toUpperCase());
    if (searchResultByTranslation) {
        return searchResultByTranslation;
    }
    /* const searchResultFromOpenAI = await getVerbFromOpenAI(searchString);
     if (searchResultFromOpenAI) {

         /!*    addVerbToJSONFile(searchResultFromOpenAI, isDirect);*!/
         return searchResultFromOpenAI;
     }*/
    return null;

}

async function getVerbFromOpenAI(verb) {
    const prompt = `Translate russian verb ${verb} to lithuanian and return result in string format with the template {'infinitive' : '[infinitive]', 'present': '[present 3rd face singular]', 'past': '[past 3rd face singular]', 'translation': '[translation to russian]'} without special characters and escape symbols`
    try {
        const jsonResult = await getDataFromOpenAI(prompt);
        return JSON.parse(jsonResult.replace(/'/g, "\""));
    } catch (error) {
        console.error('Error:', error);
        return null;
    }


}

/*
function addVerbToJSONFile(verb, isDirect) {
    const filename = isDirect ? "verbs_simple.json" : "verbs_reflex.json";
    const verbs = JSON.parse(fs.readFileSync(filename, 'utf8'));
    verbs.push(verb);
    fs.writeFileSync(filename, JSON.stringify(verbs, null, 2));
}
*/
