import styles from "../../page.module.css";
import VerbFormItem from "@/app/components/Verbs/VerbFormItem";
import {getVerbTimes} from "@/app/utils/time_generation";

import {Progress} from "@/app/UI/Progress";
import {useState} from "react";

export default function VerbFormsGrid({verb_forms, mode, isDirect}) {
    const verbTimes = getVerbTimes(verb_forms.infinitive, verb_forms.present, verb_forms.past, isDirect);

    const [results, setResults] = useState({correctNum: 0, incorrectNum: 0, totalNum: 36})


    function handleUserInputResult(isCorrect) {
        const newResults = {
            correctNum: results.correctNum + (isCorrect ? 1 : 0),
            incorrectNum: results.incorrectNum + (isCorrect ? 0 : 1),
            totalNum: results.totalNum - 1,
        };
        setResults(newResults);

    }

    return (

        <>

            {mode === 'test' && <div className={styles.results_info}>
                <div className={styles.results_info_header}>Результаты</div>
                <div className={styles.flow}>
                    <Progress correctNum={results.correctNum} incorrectNum={results.incorrectNum}
                              total={results.totalNum}/>

                </div>
            </div>

            }


            <div className={styles.flow}>
                <VerbFormItem {...verbTimes.futureTime} name="Будущее время" mode={mode}/>
                <VerbFormItem {...verbTimes.pastQuantitativeTime} name="Прошедшее повторяющееся время" mode={mode}/>
                <VerbFormItem {...verbTimes.imperativeTime} name="Повелительное наклонение" mode={mode}/>
                <VerbFormItem {...verbTimes.conditionalTime} name="Сослагательное наклонение" mode={mode}/>
                <VerbFormItem {...verbTimes.presentTime} name="Настоящее время" mode={mode}/>
                <VerbFormItem {...verbTimes.pastSimpleTime} name="Прошедшее единоразовое время" mode={mode}/>
            </div>
        </>
    );
}