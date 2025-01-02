import styles from "../../page.module.css";
import VerbFormItem from "@/app/components/Verbs/VerbFormItem";
import {getVerbTimes} from "@/app/utils/time_generation";
import {useEffect, useState} from "react";
import InputField from "@/app/UI/InputField";
import {IconHelp, IconHelpSquareRoundedFilled, IconQuestionMark} from "@tabler/icons-react";

export default function VerbFormsGrid({verb_forms, mode, isDirect}) {
    const verbTimes = getVerbTimes(verb_forms.infinitive, verb_forms.present, verb_forms.past, isDirect);
/*

    const [results, setResults] = useState({correctNum: 0, incorrectNum: 0, totalNum: 36})
*/


    return (

        <>


            <div className={styles.flow}>

                <VerbFormItem {...verbTimes.futureTime} name="Будущее время" mode={mode}
                              infinitive={verb_forms.infinitive}/>
                <VerbFormItem {...verbTimes.pastQuantitativeTime} name="Прошедшее повторяющееся время" mode={mode}
                              infinitive={verb_forms.infinitive}/>
                <VerbFormItem {...verbTimes.imperativeTime} name="Повелительное наклонение" mode={mode}
                              isImperative={true} infinitive={verb_forms.infinitive}/>

                <VerbFormItem {...verbTimes.conditionalTime} name="Сослагательное наклонение" mode={mode}
                              infinitive={verb_forms.infinitive}/>
                <VerbFormItem {...verbTimes.presentTime} name="Настоящее время" mode={mode}
                              infinitive={verb_forms.infinitive}/>
                <VerbFormItem {...verbTimes.pastSimpleTime} name="Прошедшее единоразовое время" mode={mode}
                              infinitive={verb_forms.infinitive}/>
            </div>
        </>
    );
}
