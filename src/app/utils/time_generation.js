export function generateFutureTime(infinitive, isDirect = true) {
    const charsToCutLength = isDirect ? -2 : -3;
    const root = infinitive.slice(0, charsToCutLength);

    const first_singular = composeTimeVerb(root, 's', isDirect ? 'iu' : 'iuosi');
    const second_singular = composeTimeVerb(root, 's', isDirect ? 'i' : 'iesi');
    const third_singular = composeTimeVerb(root, 's', isDirect ? '' : 'is');
    const first_plural = composeTimeVerb(root, 's', isDirect ? 'ime' : 'imės');
    const second_plural = composeTimeVerb(root, 's', isDirect ? 'ite' : 'itės');
    const third_plural = composeTimeVerb(root, 's', isDirect ? '' : 'is');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generatePastFrequentativeTime(infinitive, isDirect = true) {
    const charsToCutLength = isDirect ? -2 : -3;
    const root = infinitive.slice(0, charsToCutLength);

    const first_singular = composeTimeVerb(root, 'dav', isDirect ? 'au' : 'ausi');
    const second_singular = composeTimeVerb(root, 'dav', isDirect ? 'ai' : 'aisi');
    const third_singular = composeTimeVerb(root, 'dav', isDirect ? 'o' : 'osi');
    const first_plural = composeTimeVerb(root, 'dav', isDirect ? 'ome' : 'omės');
    const second_plural = composeTimeVerb(root, 'dav', isDirect ? 'ote' : 'otės');
    const third_plural = composeTimeVerb(root, 'dav', isDirect ? 'o' : 'osi');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generateImperativeTime(infinitive, isDirect = true) {
    const charsToCutLength = isDirect ? -2 : -3;
    const root = infinitive.slice(0, charsToCutLength);
    const first_singular = ``;
    const second_singular = composeTimeVerb(root, 'k', isDirect ? '' : 'is');
    const third_singular = ``;
    const first_plural = composeTimeVerb(root, 'k', isDirect ? 'ime' : 'imės');
    const second_plural = composeTimeVerb(root, 'k', isDirect ? 'ite' : 'itės');
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

export function generateConditionalTime(infinitive, isDirect = true) {
    const charsToCutLength = isDirect ? -2 : -3;
    const root = infinitive.slice(0, charsToCutLength);
    const first_singular = composeTimeVerb(root, 'č', isDirect ? 'iau' : 'iausi');
    const second_singular = composeTimeVerb(root, 't', isDirect ? 'um' : 'umeisi');
    const third_singular = composeTimeVerb(root, 't', isDirect ? 'ų' : 'ųsi');
    const first_plural = composeTimeVerb(root, 't', isDirect ? 'ume' : 'umėmės');
    const second_plural = composeTimeVerb(root, 't', isDirect ? 'ute' : 'umėtės');
    const third_plural = composeTimeVerb(root, 't', isDirect ? 'ų' : 'ųsi');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generatePresentTime(present, isDirect = true) {
    const charsToCutLength = isDirect ? -1 : -3;
    const root = present.slice(0, charsToCutLength);
    const ending = isDirect ? present.slice(-1) : present.slice(-3, -2);
    switch (ending) {
        case 'a':
            return {
                first_singular: composeTimeVerb(root, '', isDirect ? 'u' : 'uosi'),
                second_singular: composeTimeVerb(root, '', isDirect ? 'i' : 'esi'),
                third_singular: composeTimeVerb(root, '', isDirect ? 'a' : 'asi'),
                first_plural: composeTimeVerb(root, '', isDirect ? 'ame' : 'amės'),
                second_plural: composeTimeVerb(root, '', isDirect ? 'ate' : 'atės'),
                third_plural: composeTimeVerb(root, '', isDirect ? 'a' : 'asi')
            };
        case 'i':
            return {
                first_singular: composeTimeVerb(root, '', isDirect ? 'iu' : 'iuosi'),
                second_singular: composeTimeVerb(root, '', isDirect ? 'i' : 'iesi'),
                third_singular: composeTimeVerb(root, '', isDirect ? 'i' : 'isi'),
                first_plural: composeTimeVerb(root, '', isDirect ? 'ime' : 'imės'),
                second_plural: composeTimeVerb(root, '', isDirect ? 'ite' : 'itės'),
                third_plural: composeTimeVerb(root, '', isDirect ? 'i' : 'isi')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, '', isDirect ? 'au' : 'ausi'),
                second_singular: composeTimeVerb(root, '', isDirect ? 'ai' : 'aisi'),
                third_singular: composeTimeVerb(root, '', isDirect ? 'o' : 'osi'),
                first_plural: composeTimeVerb(root, '', isDirect ? 'ome' : 'omės'),
                second_plural: composeTimeVerb(root, '', isDirect ? 'ote' : 'otės'),
                third_plural: composeTimeVerb(root, '', isDirect ? 'o' : 'osi')
            };
    }


}


export function generatePastSimpleTime(past, isDirect = true) {
    const charsToCutLength = isDirect ? -1 : -3;
    const root = past.slice(0, charsToCutLength);
    const ending = isDirect ? past.slice(-1) : past.slice(-3, -2);
    switch (ending) {
        case 'ė':
            return {
                first_singular: composeTimeVerb(root, '', isDirect ? 'iau' : 'iausi'),
                second_singular: composeTimeVerb(root, '', isDirect ? 'ei' : 'eisi'),
                third_singular: composeTimeVerb(root, '', isDirect ? 'ė' : 'ėsi'),
                first_plural: composeTimeVerb(root, '', isDirect ? 'ėme' : 'ėmės'),
                second_plural: composeTimeVerb(root, '', isDirect ? 'ėte' : 'ėtės'),
                third_plural: composeTimeVerb(root, '', isDirect ? 'ė' : 'ėsi')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, '', isDirect ? 'au' : 'ausi'),
                second_singular: composeTimeVerb(root, '', isDirect ? 'ai' : 'aisi'),
                third_singular: composeTimeVerb(root, '', isDirect ? 'o' : 'osi'),
                first_plural: composeTimeVerb(root, '', isDirect ? 'ome' : 'omės'),
                second_plural: composeTimeVerb(root, '', isDirect ? 'ote' : 'otės'),
                third_plural: composeTimeVerb(root, '', isDirect ? 'o' : 'osi')
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