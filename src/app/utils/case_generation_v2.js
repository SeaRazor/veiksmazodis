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
                nominative: {
                    single: noun,
                    plural: root + "os"
                },
                genitive: {
                    single: root + "os",
                    plural: root + "ų"
                },
                dative: {
                    single: root + "ai",
                    plural: root + "oms"
                },
                accusative: {
                    single: root + "ą",
                    plural: root + "as"
                },
                instrumental: {
                    single: root + "a",
                    plural: root + "omis"
                },
                locative: {
                    single: root + "oje",
                    plural: root + "ose"
                },
                vocative: {
                    single: noun,
                    plural: root + "os"
                }
            };

        case "ia":
            return {
                nominative: {
                    single: noun,
                    plural: root + "ios"
                },
                genitive: {
                    single: root + "ios",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "iai",
                    plural: root + "ioms"
                },
                accusative: {
                    single: root + "ią",
                    plural: root + "ias"
                },
                instrumental: {
                    single: root + "ia",
                    plural: root + "iomis"
                },
                locative: {
                    single: root + "ioje",
                    plural: root + "iose"
                },
                vocative: {
                    single: noun,
                    plural: root + "ios"
                }
            };

        case "ė":
            return {
                nominative: {
                    single: noun,
                    plural: root + "ės"
                },
                genitive: {
                    single: root + "ės",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "ei",
                    plural: root + "ėms"
                },
                accusative: {
                    single: noun,
                    plural: root + "es"
                },
                instrumental: {
                    single: root + "e",
                    plural: root + "ėmis"
                },
                locative: {
                    single: root + "ėje",
                    plural: root + "ėse"
                },
                vocative: {
                    single: noun,
                    plural: root + "ės"
                }
            };

        case "is":
            return {
                nominative: {
                    single: noun,
                    plural: root + "ys"
                },
                genitive: {
                    single: root + "ies",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "iai",
                    plural: root + "ims"
                },
                accusative: {
                    single: "į",
                    plural: "is"
                },
                instrumental: {
                    single: root + "imi",
                    plural: root + "imis"
                },
                locative: {
                    single: root + "yje",
                    plural: root + "yse"
                },
                vocative: {
                    single: root + "ie",
                    plural: root + "ys"
                }
            };

        case "uo":
            return {
                nominative: {
                    single: noun,
                    plural: root + "erys"
                },
                genitive: {
                    single: root + "ers",
                    plural: root + "erų"
                },
                dative: {
                    single: root + "eriai",
                    plural: root + "erims"
                },
                accusative: {
                    single: root + "erį",
                    plural: root + "eris"
                },
                instrumental: {
                    single: root + "erimi",
                    plural: root + "erimis"
                },
                locative: {
                    single: root + "eryje",
                    plural: root + "eryse"
                },
                vocative: {
                    single: root + "erie",
                    plural: root + "erys"
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
                nominative: {
                    single: noun,
                    plural: root + "ai"
                },
                genitive: {
                    single: root + "o",
                    plural: root + "ų"
                },
                dative: {
                    single: root + "ui",
                    plural: root + "ams"
                },
                accusative: {
                    single: root + "ą",
                    plural: root + "us"
                },
                instrumental: {
                    single: root + "u",
                    plural: root + "ais"
                },
                locative: {
                    single: root + "e",
                    plural: root + "uose"
                },
                vocative: {
                    single: root + "e",
                    plural: root + "ai"
                },

            };

        case "ias":
            return {
                nominative: {
                    single: noun,
                    plural: root + "iai"
                },
                genitive: {
                    single: root + "io",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "iai",
                    plural: root + "iams"
                },
                accusative: {
                    single: root + "ią",
                    plural: root + "ius"
                },
                instrumental: {
                    single: root + "iu",
                    plural: root + "iais"
                },
                locative: {
                    single: root + "yje",
                    plural: root + "iuose"
                },
                vocative: {
                    single: root + "ie",
                    plural: root + "iai"
                }
            };


        case "us":
            return {
                nominative: {
                    single: noun,
                    plural: root + "ūs"
                },
                genitive: {
                    single: root + "aus",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "ui",
                    plural: root + "ums"
                },
                accusative: {
                    single: root + "ų",
                    plural: root + "ius"
                },
                instrumental: {
                    single: root + "umi",
                    plural: root + "umis"
                },
                locative: {
                    single: root + "uje",
                    plural: root + "uose"
                },
                vocative: {
                    single: root + "au",
                    plural: root + "ūs"
                }
            };

        case "ys":
            return {
                nominative: {
                    single: noun,
                    plural: root + "iai"
                },
                genitive: {
                    single: root + "io",
                    plural: root + "ų"
                },
                dative: {
                    single: root + "iui",
                    plural: root + "iams"
                },
                accusative: {
                    single: root + "į",
                    plural: root + "us"
                },
                instrumental: {
                    single: root + "iu",
                    plural: root + "iais"
                },
                locative: {
                    single: root + "yje",
                    plural: root + "iuose"
                },
                vocative: {
                    single: root + "y",
                    plural: root + "iai"
                }
            };

        case "is":
            return {
                nominative: {
                    single: noun,
                    plural: root + "iai"
                },
                genitive: {
                    single: root + "io",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "iui",
                    plural: root + "iams"
                },
                accusative: {
                    single: root + "į",
                    plural: root + "ius"
                },
                instrumental: {
                    single: root + "iu",
                    plural: root + "imis"
                },
                locative: {
                    single: root + "yje",
                    plural: root + "iuose"
                },
                vocative: {
                    single: root + "ie",
                    plural: root + "iai"
                }
            };

        case "uo":
            return {
                nominative: {
                    single: noun,
                    plural: root + "iai"
                },
                genitive: {
                    single: root + "io",
                    plural: root + "ių"
                },
                dative: {
                    single: root + "iui",
                    plural: root + "iams"
                },
                accusative: {
                    single: root + "į",
                    plural: root + "ius"
                },
                instrumental: {
                    single: root + "iu",
                    plural: root + "imis"
                },
                locative: {
                    single: root + "yje",
                    plural: root + "iuose"
                },
                vocative: {
                    single: root + "ie",
                    plural: root + "iai"
                }
            };

        default:
            return null;


    }
}