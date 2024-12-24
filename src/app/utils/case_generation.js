export function generateNounCases(noun, gender, palatalize) {
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
            return getFemaleCases(noun, ending, root, palatalize);
        case "m" :
            return getMaleCases(noun, ending, root, palatalize);
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

function getFemaleCases(noun, ending, root, palatalize) {
    switch (ending) {
        case "a":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, 'os', palatalize),
                    dative: composeCase(root, "ai", palatalize),
                    accusative: composeCase(root, "ą", palatalize),
                    instrumental: composeCase(root, "a", palatalize),
                    locative: composeCase(root, "oje", palatalize),
                    vocative: composeCase(root, 'a', palatalize)
                },
                plural: {
                    nominative: composeCase(root, "os", palatalize),
                    genitive: composeCase(root, "ų", palatalize),
                    dative: composeCase(root, "oms", palatalize),
                    accusative: composeCase(root, "as", palatalize),
                    instrumental: composeCase(root, "omis", palatalize),
                    locative: composeCase(root, "ose", palatalize),
                    vocative: composeCase(root, "os", palatalize)
                }
            };
        case "ia":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ios", palatalize),
                    dative: composeCase(root, "iai", palatalize),
                    accusative: composeCase(root, "ią", palatalize),
                    instrumental: composeCase(root, "ia", palatalize),
                    locative: composeCase(root, "ioje", palatalize),
                    vocative: noun
                },
                plural: {
                    nominative: composeCase(root, "ios", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "ioms", palatalize),
                    accusative: composeCase(root, "ias", palatalize),
                    instrumental: composeCase(root, "iomis", palatalize),
                    locative: composeCase(root, "iose", palatalize),
                    vocative: composeCase(root, "ios", palatalize)
                }
            };
        case "ė":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ės", palatalize),
                    dative: composeCase(root, "ei", palatalize),
                    accusative: composeCase(root, 'ę', palatalize),
                    instrumental: composeCase(root, "e", palatalize),
                    locative: composeCase(root, "ėje", palatalize),
                    vocative: composeCase(root, "e", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "ės", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "ėms", palatalize),
                    accusative: composeCase(root, "es", palatalize),
                    instrumental: composeCase(root, "ėmis", palatalize),
                    locative: composeCase(root, "ėse", palatalize),
                    vocative: composeCase(root, "ės", palatalize)
                }

            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ies", palatalize),
                    dative: composeCase(root, "iai", palatalize),
                    accusative: "i",
                    instrumental: composeCase(root, "imi", palatalize),
                    locative: composeCase(root, "yje", palatalize),
                    vocative: composeCase(root, "ie", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "ys", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "ims", palatalize),
                    accusative: composeCase(root, "is", palatalize),
                    instrumental: composeCase(root, "imis", palatalize),
                    locative: composeCase(root, "yse", palatalize),
                    vocative: composeCase(root, "ys", palatalize)
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ers", palatalize),
                    dative: composeCase(root, "eriai", palatalize),
                    accusative: composeCase(root, "eri", palatalize),
                    instrumental: composeCase(root, "erimi", palatalize),
                    locative: composeCase(root, "eryie", palatalize),
                    vocative: composeCase(root, "erie", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "erys", palatalize),
                    genitive: composeCase(root, "erų", palatalize),
                    dative: composeCase(root, "erims", palatalize),
                    accusative: composeCase(root, "eris", palatalize),
                    instrumental: composeCase(root, "erimis", palatalize),
                    locative: composeCase(root, "eryse", palatalize),
                    vocative: composeCase(root, "erys", palatalize)
                }
            };
        default:
            return null;
    }
}

function getMaleCases(noun, ending, root, palatalize) {
    switch (ending) {
        case "as":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "o", palatalize),
                    dative: composeCase(root, "ui", palatalize),
                    accusative: composeCase(root, "ą", palatalize),
                    instrumental: composeCase(root, "u", palatalize),
                    locative: composeCase(root, "e", palatalize),
                    vocative: composeCase(root, "ai", palatalize),
                },
                plural: {
                    nominative: composeCase(root, "ai", palatalize),
                    genitive: composeCase(root, "ų", palatalize),
                    dative: composeCase(root, "ams", palatalize),
                    accusative: composeCase(root, "us", palatalize),
                    instrumental: composeCase(root, "ais", palatalize),
                    locative: composeCase(root, "uose", palatalize),
                    vocative: composeCase(root, "ai", palatalize),
                }
            };
        case "ias":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io", palatalize),
                    dative: composeCase(root, "iui", palatalize),
                    accusative: composeCase(root, "ią", palatalize),
                    instrumental: composeCase(root, "iu", palatalize),
                    locative: composeCase(root, "ie", palatalize),
                    vocative: composeCase(root, "ie", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "iai", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "iams", palatalize),
                    accusative: composeCase(root, "ius", palatalize),
                    instrumental: composeCase(root, "iais", palatalize),
                    locative: composeCase(root, "iuose", palatalize),
                    vocative: composeCase(root, "iai", palatalize)
                }
            };
        case "us":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "aus", palatalize),
                    dative: composeCase(root, "ui", palatalize),
                    accusative: composeCase(root, "ų", palatalize),
                    instrumental: composeCase(root, "umi", palatalize),
                    locative: composeCase(root, "uje", palatalize),
                    vocative: composeCase(root, "au", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "ūs", palatalize),
                    genitive: composeCase(root, "ų", palatalize),
                    dative: composeCase(root, "ums", palatalize),
                    accusative: composeCase(root, "us", palatalize),
                    instrumental: composeCase(root, "umis", palatalize),
                    locative: composeCase(root, "uose", palatalize),
                    vocative: composeCase(root, "ūs", palatalize)
                }
            };
        case "ys":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io", palatalize),
                    dative: composeCase(root, "iui", palatalize),
                    accusative: composeCase(root, "į", palatalize),
                    instrumental: composeCase(root, "iu", palatalize),
                    locative: composeCase(root, "yje", palatalize),
                    vocative: composeCase(root, "y", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "iai", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "iams", palatalize),
                    accusative: composeCase(root, "ius", palatalize),
                    instrumental: composeCase(root, "iais", palatalize),
                    locative: composeCase(root, "iuose", palatalize),
                    vocative: composeCase(root, "iai", palatalize)
                }
            };
        case "is":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "io", palatalize),
                    dative: composeCase(root, "iui", palatalize),
                    accusative: composeCase(root, "į", palatalize),
                    instrumental: composeCase(root, "iu", palatalize),
                    locative: composeCase(root, "yje", palatalize),
                    vocative: composeCase(root, "i", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "iai", palatalize),
                    genitive: composeCase(root, "ių", palatalize),
                    dative: composeCase(root, "iams", palatalize),
                    accusative: composeCase(root, "ius", palatalize),
                    instrumental: composeCase(root, "iais", palatalize),
                    locative: composeCase(root, "iuose", palatalize),
                    vocative: composeCase(root, "iai", palatalize)
                }
            };
        case "uo":
            return {
                single: {
                    nominative: noun,
                    genitive: composeCase(root, "ens", palatalize),
                    dative: composeCase(root, "iui", palatalize),
                    accusative: composeCase(root, "eni", palatalize),
                    instrumental: composeCase(root, "eniu", palatalize),
                    locative: composeCase(root, "enyje", palatalize),
                    vocative: composeCase(root, "enie", palatalize)
                },
                plural: {
                    nominative: composeCase(root, "enys", palatalize),
                    genitive: composeCase(root, "enu", palatalize),
                    dative: composeCase(root, "ims", palatalize),
                    accusative: composeCase(root, "enis", palatalize),
                    instrumental: composeCase(root, "enimis", palatalize),
                    locative: composeCase(root, "enyse", palatalize),
                    vocative: composeCase(root, "enys", palatalize)
                }
            };
        default:
            return null;
    }
}


function composeCase(root, ending, palatalize = true) {

    const resultCandidate = root + ending;
    const replacementPatterns = ['tia', 'tią', 'tiu', 'tių', 'tiū', 'tio', 'dia', 'dią', 'diu', 'dių', 'diū', 'dio'];
    for (const pattern of replacementPatterns) {
        if (resultCandidate.includes(pattern)) {
            const firstPatternLetter = pattern.charAt(0);
            switch (firstPatternLetter) {
                case 't':
                    return resultCandidate.replace(pattern, 'č' + pattern.slice(-2));
                case 'd':
                    return resultCandidate.replace(pattern, 'dž' + pattern.slice(-2));
                default:
                    return resultCandidate;
            }

        }
    }
    return resultCandidate;
}
