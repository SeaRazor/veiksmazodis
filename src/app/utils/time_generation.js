export function getVerbTimes(infinitive, present, past, isDirect = true) {
    const asDirect = conjugatedAsDirect(isDirect, infinitive);

    // infinitive
    let charsToCutLength = asDirect ? -2 : -3;
    const infinitiveRoot = infinitive.slice(0, charsToCutLength);
    const futureTime = generateFutureTime(infinitiveRoot, asDirect);
    const pastQuantitativeTime = generatePastQuantitativeTime(infinitiveRoot, asDirect);
    const imperativeTime = generateImperativeTime(infinitiveRoot, asDirect);
    const conditionalTime = generateConditionalTime(infinitiveRoot, asDirect);

    // present
    charsToCutLength = asDirect ? -1 : -3;
    const presentRoot = present.slice(0, charsToCutLength);
    let ending = asDirect ? present.slice(-1) : present.slice(-3, -2);
    const presentTime = generatePresentTime(presentRoot, ending, asDirect);

    // past simple
    charsToCutLength = asDirect ? -1 : -3;
    const pastSimpleRoot = past.slice(0, charsToCutLength);
    ending = asDirect ? past.slice(-1) : past.slice(-3, -2);
    const pastSimpleTime = generatePastSimpleTime(pastSimpleRoot, ending, asDirect);

    return {
        futureTime,
        pastQuantitativeTime,
        imperativeTime,
        conditionalTime,
        presentTime,
        pastSimpleTime
    }
}

function generateFutureTime(root, asDirect) {

    const first_singular = composeTimeVerb(root, 's', asDirect ? 'iu' : 'iuosi');
    const second_singular = composeTimeVerb(root, 's', asDirect ? 'i' : 'iesi');
    const third_singular = composeTimeVerb(root, 's', asDirect ? '' : 'is');
    const first_plural = composeTimeVerb(root, 's', asDirect ? 'ime' : 'imės');
    const second_plural = composeTimeVerb(root, 's', asDirect ? 'ite' : 'itės');
    const third_plural = composeTimeVerb(root, 's', asDirect ? '' : 'is');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

function generatePastQuantitativeTime(root, asDirect) {


    const first_singular = composeTimeVerb(root, 'dav', asDirect ? 'au' : 'ausi');
    const second_singular = composeTimeVerb(root, 'dav', asDirect ? 'ai' : 'aisi');
    const third_singular = composeTimeVerb(root, 'dav', asDirect ? 'o' : 'osi');
    const first_plural = composeTimeVerb(root, 'dav', asDirect ? 'ome' : 'omės');
    const second_plural = composeTimeVerb(root, 'dav', asDirect ? 'ote' : 'otės');
    const third_plural = composeTimeVerb(root, 'dav', asDirect ? 'o' : 'osi');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

function generateImperativeTime(root, asDirect) {

    const first_singular = ``;
    const second_singular = composeTimeVerb(root, 'k', asDirect ? '' : 'is');
    const third_singular = ``;
    const first_plural = composeTimeVerb(root, 'k', asDirect ? 'ime' : 'imės');
    const second_plural = composeTimeVerb(root, 'k', asDirect ? 'ite' : 'itės');
    const third_plural = ``;
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

function generateConditionalTime(root, asDirect) {


    const first_singular = composeTimeVerb(root, 'č', asDirect ? 'iau' : 'iausi');
    const second_singular = composeTimeVerb(root, 't', asDirect ? 'um' : 'umeisi');
    const third_singular = composeTimeVerb(root, 't', asDirect ? 'ų' : 'ųsi');
    const first_plural = composeTimeVerb(root, 't', asDirect ? 'ume' : 'umėmės');
    const second_plural = composeTimeVerb(root, 't', asDirect ? 'ute' : 'umėtės');
    const third_plural = composeTimeVerb(root, 't', asDirect ? 'ų' : 'ųsi');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

function generatePresentTime(root, ending, asDirect) {

    switch (ending) {
        case 'a':
            return {
                first_singular: composeTimeVerb(root, '', asDirect ? 'u' : 'uosi'),
                second_singular: composeTimeVerb(root, '', asDirect ? 'i' : 'esi'),
                third_singular: composeTimeVerb(root, '', asDirect ? 'a' : 'asi'),
                first_plural: composeTimeVerb(root, '', asDirect ? 'ame' : 'amės'),
                second_plural: composeTimeVerb(root, '', asDirect ? 'ate' : 'atės'),
                third_plural: composeTimeVerb(root, '', asDirect ? 'a' : 'asi')
            };
        case 'i':
            return {
                first_singular: composeTimeVerb(root, '', asDirect ? 'iu' : 'iuosi'),
                second_singular: composeTimeVerb(root, '', asDirect ? 'i' : 'iesi'),
                third_singular: composeTimeVerb(root, '', asDirect ? 'i' : 'isi'),
                first_plural: composeTimeVerb(root, '', asDirect ? 'ime' : 'imės'),
                second_plural: composeTimeVerb(root, '', asDirect ? 'ite' : 'itės'),
                third_plural: composeTimeVerb(root, '', asDirect ? 'i' : 'isi')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, '', asDirect ? 'au' : 'ausi'),
                second_singular: composeTimeVerb(root, '', asDirect ? 'ai' : 'aisi'),
                third_singular: composeTimeVerb(root, '', asDirect ? 'o' : 'osi'),
                first_plural: composeTimeVerb(root, '', asDirect ? 'ome' : 'omės'),
                second_plural: composeTimeVerb(root, '', asDirect ? 'ote' : 'otės'),
                third_plural: composeTimeVerb(root, '', asDirect ? 'o' : 'osi')
            };
    }


}


function generatePastSimpleTime(root, ending, asDirect) {

    switch (ending) {
        case 'ė':
            return {
                first_singular: composeTimeVerb(root, '', asDirect ? 'iau' : 'iausi'),
                second_singular: composeTimeVerb(root, '', asDirect ? 'ei' : 'eisi'),
                third_singular: composeTimeVerb(root, '', asDirect ? 'ė' : 'ėsi'),
                first_plural: composeTimeVerb(root, '', asDirect ? 'ėme' : 'ėmės'),
                second_plural: composeTimeVerb(root, '', asDirect ? 'ėte' : 'ėtės'),
                third_plural: composeTimeVerb(root, '', asDirect ? 'ė' : 'ėsi')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, '', asDirect ? 'au' : 'ausi'),
                second_singular: composeTimeVerb(root, '', asDirect ? 'ai' : 'aisi'),
                third_singular: composeTimeVerb(root, '', asDirect ? 'o' : 'osi'),
                first_plural: composeTimeVerb(root, '', asDirect ? 'ome' : 'omės'),
                second_plural: composeTimeVerb(root, '', asDirect ? 'ote' : 'otės'),
                third_plural: composeTimeVerb(root, '', asDirect ? 'o' : 'osi')
            };

    }
}

function composeTimeVerb(root, suffix, ending) {
    const lastRootLetter = root.slice(-1);
    const firstEndingLetter = ending.slice(0, 1);
    if (lastRootLetter === firstEndingLetter) {
        return root.slice(0, -1) + suffix + ending;
    }
    return root + suffix + ending;

}

function conjugatedAsDirect(isDirect, infinitive) {
    if (isDirect) return true;
    const ending = infinitive.slice(-3);
    if (ending === 'tis') return false;
    const prefix = infinitive.slice(2, 4);
    if (prefix === 'si') return true;

}