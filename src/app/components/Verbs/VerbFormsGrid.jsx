import styles from "../../page.module.css";
import VerbFormItem from "@/app/components/Verbs/VerbFormItem";
import {getVerbTimes} from "@/app/utils/time_generation";

export default function VerbFormsGrid({verb_forms, mode, isDirect}) {
    const verbTimes = getVerbTimes(verb_forms.infinitive, verb_forms.present, verb_forms.past, isDirect);
    return (

        <div className={styles.flow}>
            <VerbFormItem {...verbTimes.futureTime} name="Будущее время" mode={mode}/>
            <VerbFormItem {...verbTimes.pastQuantitativeTime} name="Прошедшее повторяющееся время" mode={mode}/>
            <VerbFormItem {...verbTimes.imperativeTime} name="Повелительное наклонение" mode={mode}/>
            <VerbFormItem {...verbTimes.conditionalTime} name="Сослагательное наклонение" mode={mode}/>
            <VerbFormItem {...verbTimes.presentTime} name="Настоящее время" mode={mode}/>
            <VerbFormItem {...verbTimes.pastSimpleTime} name="Прошедшее единоразовое время" mode={mode}/>
        </div>
    );
}