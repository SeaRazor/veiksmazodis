export function generateNounCases(noun, gender) {
    const nominalCaseEndings = {
        "f": [
            "a",
            "ia",
            "ė",
            "is",
            "uo"
        ],
        "m": [
            "as",
            "ias",
            "is",
            "us",
            "ys",
            "uo"
        ]
    };

    const genderEndings = nominalCaseEndings[gender];
    if (!genderEndings) {
        return null;
    }
    const ending = findEnding(noun, genderEndings);
    if (!ending) {
        return null;
    }
    const root = noun.slice(0, -ending.length);
    switch (gender) {
        case "f" :
            return getFemaleCases(noun, ending, root);
        case "m" :
            return getMaleCases(noun, ending, root);
        default:
            return null;
    }


}


function findEnding(noun, endings) {
    for (const ending of endings) {
        if (noun.endsWith(ending)) {
            return ending;
        }
    }
    return null;
}

function getFemaleCases(noun, ending, root) {
    switch (ending) {
        case "a":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "os",
                    dative: root + "ai",
                    accusative: root + "ą",
                    instrumental: root + "a",
                    locative: root + "oje",
                    vocative: noun
                },
                plural: {
                    nominative: root + "os",
                    genitive: root + "ų",
                    dative: root + "oms",
                    accusative: root + "as",
                    instrumental: root + "omis",
                    locative: root + "ose",
                    vocative: root + "os"
                }
            };
        case "ia":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "ios",
                    dative: root + "iai",
                    accusative: root + "ią",
                    instrumental: root + "ia",
                    locative: root + "ioje",
                    vocative: noun
                },
                plural: {
                    nominative: root + "ios",
                    genitive: root + "ių",
                    dative: root + "ioms",
                    accusative: root + "ias",
                    instrumental: root + "iomis",
                    locative: root + "iose",
                    vocative: root + "ios"
                }
            };
        case "ė":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "ės",
                    dative: root + "ei",
                    accusative: root + 'ę',
                    instrumental: root + "e",
                    locative: root + "ėje",
                    vocative: root + "e"
                },
                plural: {
                    nominative: root + "ės",
                    genitive: root + "ių",
                    dative: root + "ėms",
                    accusative: root + "es",
                    instrumental: root + "ėmis",
                    locative: root + "ėse",
                    vocative: root + "ės"
                }

            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "ies",
                    dative: root + "iai",
                    accusative: "i",
                    instrumental: root + "imi",
                    locative: root + "yje",
                    vocative: root + "ie"
                },
                plural: {
                    nominative: root + "ys",
                    genitive: root + "ių",
                    dative: root + "ims",
                    accusative: root + "is",
                    instrumental: root + "imis",
                    locative: root + "yse",
                    vocative: root + "ys"
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "ers",
                    dative: root + "eriai",
                    accusative: root + "eri",
                    instrumental: root + "erimi",
                    locative: root + "eryie",
                    vocative: root + "erie"
                },
                plural: {
                    nominative: root + "erys",
                    genitive: root + "erų",
                    dative: root + "erims",
                    accusative: root + "eris",
                    instrumental: root + "erimis",
                    locative: root + "eryse",
                    vocative: root + "erys"
                }
            };
        default:
            return null;
    }
}

function getMaleCases(noun, ending, root) {
    switch (ending) {

        case "as":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "o",
                    dative: root + "ui",
                    accusative: root + "ą",
                    instrumental: root + "u",
                    locative: root + "e",
                    vocative: root + "e"
                },
                plural: {
                    nominative: root + "ai",
                    genitive: root + "ų",
                    dative: root + "ams",
                    accusative: root + "us",
                    instrumental: root + "ais",
                    locative: root + "uose",
                    vocative: root + "ai"
                }
            };
        case "ias":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "io",
                    dative: root + "iui",
                    accusative: root + "ia",
                    instrumental: root + "iu",
                    locative: root + "ie",
                    vocative: root + "ie"
                },
                plural: {
                    nominative: root + "iai",
                    genitive: root + "ių",
                    dative: root + "iams",
                    accusative: root + "ius",
                    instrumental: root + "iais",
                    locative: root + "iuose",
                    vocative: root + "iai"
                }
            };
        case "us":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "aus",
                    dative: root + "ui",
                    accusative: root + "u",
                    instrumental: root + "umi",
                    locative: root + "uje",
                    vocative: root + "au"
                },
                plural: {
                    nominative: root + "us",
                    genitive: root + "ių",
                    dative: root + "ums",
                    accusative: root + "ius",
                    instrumental: root + "umis",
                    locative: root + "uose",
                    vocative: root + "us"
                }
            };
        case "ys":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "io",
                    dative: root + "iui",
                    accusative: root + "į",
                    instrumental: root + "iu",
                    locative: root + "yje",
                    vocative: root + "y"
                },
                plural: {
                    nominative: root + "iai",
                    genitive: root + "ų",
                    dative: root + "iams",
                    accusative: root + "us",
                    instrumental: root + "iais",
                    locative: root + "iuose",
                    vocative: root + "iai"
                }
            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "io",
                    dative: root + "iui",
                    accusative: root + "i",
                    instrumental: root + "iu",
                    locative: root + "yje",
                    vocative: root + "i"
                },
                plural: {
                    nominative: root + "iai",
                    genitive: root + "ių",
                    dative: root + "iams",
                    accusative: root + "ius",
                    instrumental: root + "iais",
                    locative: root + "iuose",
                    vocative: root + "iai"
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: root + "ens",
                    dative: root + "iui",
                    accusative: root + "eni",
                    instrumental: root + "eniu",
                    locative: root + "enyje",
                    vocative: root + "enie"
                },
                plural: {
                    nominative: root + "enys",
                    genitive: root + "enu",
                    dative: root + "ims",
                    accusative: root + "enis",
                    instrumental: root + "enimis",
                    locative: root + "enyse",
                    vocative: root + "enys"
                }
            };
        default:
            return null;


    }
}