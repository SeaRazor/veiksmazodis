import styles from "../../page.module.css";
import VerbFormItem from "@/app/components/Verbs/VerbFormItem";
import {
    generateConditionalTime,
    generateFutureTime,
    generateImperativeTime,
    generatePastFrequentativeTime,
    generatePastSimpleTime,
    generatePresentTime
} from "@/app/utils/time_generation";

export default function VerbFormsGrid({verb_forms, mode, isDirect}) {

    return (

        <div className={styles.flow}>
            <VerbFormItem {...generateFutureTime(verb_forms.infinitive, isDirect)} name="Будущее время" mode={mode}/>
            <VerbFormItem {...generatePastFrequentativeTime(verb_forms.infinitive, isDirect)}
                          name="Прошедшее повторяющееся время"
                          mode={mode}/>
            <VerbFormItem {...generateImperativeTime(verb_forms.infinitive, isDirect)} name="Повелительное наклонение"
                          mode={mode}/>
            <VerbFormItem {...generateConditionalTime(verb_forms.infinitive, isDirect)} name="Сослагательное наклонение"
                          mode={mode}/>
            <VerbFormItem {...generatePresentTime(verb_forms.present, isDirect)} name="Настоящее время" mode={mode}/>
            <VerbFormItem {...generatePastSimpleTime(verb_forms.past, isDirect)} name="Прошедшее единоразовое время"
                          mode={mode}/>

        </div>
    );
}