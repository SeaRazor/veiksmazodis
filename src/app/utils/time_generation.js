export function generateFutureTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const first_singular = composeTimeVerb(root, 'siu');
    const second_singular = composeTimeVerb(root, 'si');
    const third_singular = composeTimeVerb(root, 's');
    const first_plural = composeTimeVerb(root, 'sime');
    const second_plural = composeTimeVerb(root, 'site');
    const third_plural = composeTimeVerb(root, 's');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generatePastFrequentativeTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const root_last = root.slice(-1);
    const first_singular = composeTimeVerb(root, 'davau');
    const second_singular = composeTimeVerb(root, 'davai');
    const third_singular = composeTimeVerb(root, 'davo');
    const first_plural = composeTimeVerb(root, 'davome');
    const second_plural = composeTimeVerb(root, 'davote');
    const third_plural = composeTimeVerb(root, 'davo');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generateImperativeTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const root_last = root.slice(-1);
    const first_singular = ``;
    const second_singular = composeTimeVerb(root, 'k');
    const third_singular = ``;
    const first_plural = composeTimeVerb(root, 'kime');
    const second_plural = composeTimeVerb(root, 'kite');
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

export function generatePresentTime(present) {
    const root = present.slice(0, -1);
    const ending = present.slice(-1);
    switch (ending) {
        case 'a':
            return {
                first_singular: composeTimeVerb(root, 'u'),
                second_singular: composeTimeVerb(root, 'i'),
                third_singular: composeTimeVerb(root, 'a'),
                first_plural: composeTimeVerb(root, 'ame'),
                second_plural: composeTimeVerb(root, 'ate'),
                third_plural: composeTimeVerb(root, 'a')
            };
        case 'i':
            return {
                first_singular: composeTimeVerb(root, 'iu'),
                second_singular: composeTimeVerb(root, 'i'),
                third_singular: composeTimeVerb(root, 'i'),
                first_plural: composeTimeVerb(root, 'ime'),
                second_plural: composeTimeVerb(root, 'ite'),
                third_plural: composeTimeVerb(root, 'i')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, 'au'),
                second_singular: composeTimeVerb(root, 'ai'),
                third_singular: composeTimeVerb(root, 'o'),
                first_plural: composeTimeVerb(root, 'ome'),
                second_plural: composeTimeVerb(root, 'ote'),
                third_plural: composeTimeVerb(root, 'o')
            };
    }


}

export function generateConditionalTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const root_last = root.slice(-1);
    const first_singular = composeTimeVerb(root, 'čiau');
    const second_singular = composeTimeVerb(root, 'tum');
    const third_singular = composeTimeVerb(root, 'tų');
    const first_plural = composeTimeVerb(root, 'tume');
    const second_plural = composeTimeVerb(root, 'tute');
    const third_plural = composeTimeVerb(root, 'tų');
    return {
        first_singular,
        second_singular,
        third_singular,
        first_plural,
        second_plural,
        third_plural
    };
}

export function generatePastSimpleTime(past) {
    const root = past.slice(0, -1);
    const ending = past.slice(-1);
    switch (ending) {
        case 'ė':
            return {
                first_singular: composeTimeVerb(root, 'iau'),
                second_singular: composeTimeVerb(root, 'ei'),
                third_singular: composeTimeVerb(root, 'ė'),
                first_plural: composeTimeVerb(root, 'ėme'),
                second_plural: composeTimeVerb(root, 'ėte'),
                third_plural: composeTimeVerb(root, 'ė')
            };
        case 'o':
            return {
                first_singular: composeTimeVerb(root, 'au'),
                second_singular: composeTimeVerb(root, 'ai'),
                third_singular: composeTimeVerb(root, 'o'),
                first_plural: composeTimeVerb(root, 'ome'),
                second_plural: composeTimeVerb(root, 'ote'),
                third_plural: composeTimeVerb(root, 'o')
            };

    }
}

function composeTimeVerb(root, ending) {
    const lastRootLetter = root.slice(-1);
    const firstEndingLetter = ending.slice(0, 1);
    if (lastRootLetter === firstEndingLetter) {
        return root.slice(0, -1) + ending;
    }
    ;
    return root + ending;

}