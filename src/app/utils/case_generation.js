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
                    genitive: composeCase(root, 'os'),
                    dative: composeCase(root, "ai"),
                    accusative: composeCase(root, "ą"),
                    instrumental: composeCase(root, "a"),
                    locative: composeCase(root, "oje"),
                    vocative: composeCase(root, 'a')
                },
                plural: {
                    nominative: composeCase(root, "os"),
                    genitive: composeCase(root, "ų"),
                    dative: composeCase(root, "oms"),
                    accusative: composeCase(root, "as"),
                    instrumental: composeCase(root, "omis"),
                    locative: composeCase(root, "ose"),
                    vocative: composeCase(root, "os")
                }
            };
        case "ia":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ios"),
                    dative: composeCase(root, "iai"),
                    accusative: composeCase(root, "ią"),
                    instrumental: composeCase(root, "ia"),
                    locative: composeCase(root, "ioje"),
                    vocative: noun
                },
                plural: {
                    nominative: composeCase(root, "ios"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "ioms"),
                    accusative: composeCase(root, "ias"),
                    instrumental: composeCase(root, "iomis"),
                    locative: composeCase(root, "iose"),
                    vocative: composeCase(root, "ios")
                }
            };
        case "ė":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ės"),
                    dative: composeCase(root, "ei"),
                    accusative: composeCase(root, 'ę'),
                    instrumental: composeCase(root, "e"),
                    locative: composeCase(root, "ėje"),
                    vocative: composeCase(root, "e")
                },
                plural: {
                    nominative: composeCase(root, "ės"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "ėms"),
                    accusative: composeCase(root, "es"),
                    instrumental: composeCase(root, "ėmis"),
                    locative: composeCase(root, "ėse"),
                    vocative: composeCase(root, "ės")
                }

            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ies"),
                    dative: composeCase(root, "iai"),
                    accusative: "i",
                    instrumental: composeCase(root, "imi"),
                    locative: composeCase(root, "yje"),
                    vocative: composeCase(root, "ie")
                },
                plural: {
                    nominative: composeCase(root, "ys"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "ims"),
                    accusative: composeCase(root, "is"),
                    instrumental: composeCase(root, "imis"),
                    locative: composeCase(root, "yse"),
                    vocative: composeCase(root, "ys")
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ers"),
                    dative: composeCase(root, "eriai"),
                    accusative: composeCase(root, "eri"),
                    instrumental: composeCase(root, "erimi"),
                    locative: composeCase(root, "eryie"),
                    vocative: composeCase(root, "erie")
                },
                plural: {
                    nominative: composeCase(root, "erys"),
                    genitive: composeCase(root, "erų"),
                    dative: composeCase(root, "erims"),
                    accusative: composeCase(root, "eris"),
                    instrumental: composeCase(root, "erimis"),
                    locative: composeCase(root, "eryse"),
                    vocative: composeCase(root, "erys")
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
                    genitive: composeCase(root, "o"),
                    dative: composeCase(root, "ui"),
                    accusative: composeCase(root, "ą"),
                    instrumental: composeCase(root, "u"),
                    locative: composeCase(root, "e"),
                    vocative: composeCase(root, "ai")
                },
                plural: {
                    nominative: composeCase(root, "ai"),
                    genitive: composeCase(root, "ų"),
                    dative: composeCase(root, "ams"),
                    accusative: composeCase(root, "us"),
                    instrumental: composeCase(root, "ais"),
                    locative: composeCase(root, "uose"),
                    vocative: composeCase(root, "ai")
                }
            };
        case "ias":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io"),
                    dative: composeCase(root, "iui"),
                    accusative: composeCase(root, "ią"),
                    instrumental: composeCase(root, "iu"),
                    locative: composeCase(root, "ie"),
                    vocative: composeCase(root, "ie")
                },
                plural: {
                    nominative: composeCase(root, "iai"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "iams"),
                    accusative: composeCase(root, "ius"),
                    instrumental: composeCase(root, "iais"),
                    locative: composeCase(root, "iuose"),
                    vocative: composeCase(root, "iai")
                }
            };
        case "us":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "aus"),
                    dative: composeCase(root, "ui"),
                    accusative: composeCase(root, "u"),
                    instrumental: composeCase(root, "umi"),
                    locative: composeCase(root, "uje"),
                    vocative: composeCase(root, "au")
                },
                plural: {
                    nominative: composeCase(root, "us"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "ums"),
                    accusative: composeCase(root, "ius"),
                    instrumental: composeCase(root, "umis"),
                    locative: composeCase(root, "uose"),
                    vocative: composeCase(root, "us")
                }
            };
        case "ys":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io"),
                    dative: composeCase(root, "iui"),
                    accusative: composeCase(root, "į"),
                    instrumental: composeCase(root, "iu"),
                    locative: composeCase(root, "yje"),
                    vocative: composeCase(root, "y")
                },
                plural: {
                    nominative: composeCase(root, "iai"),
                    genitive: composeCase(root, "ų"),
                    dative: composeCase(root, "iams"),
                    accusative: composeCase(root, "us"),
                    instrumental: composeCase(root, "iais"),
                    locative: composeCase(root, "iuose"),
                    vocative: composeCase(root, "iai")
                }
            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io"),
                    dative: composeCase(root, "iui"),
                    accusative: composeCase(root, "į"),
                    instrumental: composeCase(root, "iu"),
                    locative: composeCase(root, "yje"),
                    vocative: composeCase(root, "i")
                },
                plural: {
                    nominative: composeCase(root, "iai"),
                    genitive: composeCase(root, "ių"),
                    dative: composeCase(root, "iams"),
                    accusative: composeCase(root, "ius"),
                    instrumental: composeCase(root, "iais"),
                    locative: composeCase(root, "iuose"),
                    vocative: composeCase(root, "iai")
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ens"),
                    dative: composeCase(root, "iui"),
                    accusative: composeCase(root, "eni"),
                    instrumental: composeCase(root, "eniu"),
                    locative: composeCase(root, "enyje"),
                    vocative: composeCase(root, "enie")
                },
                plural: {
                    nominative: composeCase(root, "enys"),
                    genitive: composeCase(root, "enu"),
                    dative: composeCase(root, "ims"),
                    accusative: composeCase(root, "enis"),
                    instrumental: composeCase(root, "enimis"),
                    locative: composeCase(root, "enyse"),
                    vocative: composeCase(root, "enys")
                }
            };
        default:
            return null;
    }
}

function composeCase(root, ending) {
    const lastRootLetter = root.slice(-1);
    if (lastRootLetter === 't' && ending !== 'į') {
        return root.slice(0, -1) + 'č' + ending;
    }
    return root + ending;
}
