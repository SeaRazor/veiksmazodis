export function generateFutureTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const root_last = root.slice(-1);
    const first_singular = `${root}siu`;
    const second_singular = `${root}si`;
    const third_singular = `${root}s`;
    const first_plural = `${root}sime`;
    const second_plural = `${root}site`;
    const third_plural = `${root}s`;
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
    const first_singular = `${root}davau`;
    const second_singular = `${root}davai`;
    const third_singular = `${root}davo`;
    const first_plural = `${root}davome`;
    const second_plural = `${root}davote`;
    const third_plural = `${root}davo`;
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
    const second_singular = `${root}k`;
    const third_singular = ``;
    const first_plural = `${root}kime`;
    const second_plural = `${root}kite`;
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
                first_singular: `${root}u`,
                second_singular: `${root}i`,
                third_singular: `${root}a`,
                first_plural: `${root}ame`,
                second_plural: `${root}ate`,
                third_plural: `${root}a`
            };
        case 'i':
            return {
                first_singular: `${root}iu`,
                second_singular: `${root}i`,
                third_singular: `${root}i`,
                first_plural: `${root}ime`,
                second_plural: `${root}ite`,
                third_plural: `${root}i`
            };
        case 'o':
            return {
                first_singular: `${root}au`,
                second_singular: `${root}ai`,
                third_singular: `${root}o`,
                first_plural: `${root}ome`,
                second_plural: `${root}ote`,
                third_plural: `${root}o`
            };
    }


}

export function generateConditionalTime(infinitive) {
    const root = infinitive.slice(0, -2);
    const root_last = root.slice(-1);
    const first_singular = `${root}čiau`;
    const second_singular = `${root}tum`;
    const third_singular = `${root}tų`;
    const first_plural = `${root}tume`;
    const second_plural = `${root}tute`;
    const third_plural = `${root}tų`;
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
                first_singular: `${root}iau`,
                second_singular: `${root}ei`,
                third_singular: `${root}ė`,
                first_plural: `${root}ėme`,
                second_plural: `${root}ėte`,
                third_plural: `${root}ė`
            };
        case 'o':
            return {
                first_singular: `${root}au`,
                second_singular: `${root}ai`,
                third_singular: `${root}o`,
                first_plural: `${root}ome`,
                second_plural: `${root}ote`,
                third_plural: `${root}o`
            };

    }
}