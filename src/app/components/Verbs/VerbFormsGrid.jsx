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

export default function VerbFormsGrid({verb_forms, mode}) {

    return (

        <div className={styles.grid}>
            <VerbFormItem {...generateFutureTime(verb_forms.infinitive)} name="Будущее время" mode={mode}/>
            <VerbFormItem {...generatePastFrequentativeTime(verb_forms.infinitive)} name="Прошедшее повторяющееся время"
                          mode={mode}/>
            <VerbFormItem {...generateImperativeTime(verb_forms.infinitive)} name="Повелительное наклонение"
                          mode={mode}/>
            <VerbFormItem {...generateConditionalTime(verb_forms.infinitive)} name="Сослагательное наклонение"
                          mode={mode}/>
            <VerbFormItem {...generatePresentTime(verb_forms.present)} name="Настоящее время" mode={mode}/>
            <VerbFormItem {...generatePastSimpleTime(verb_forms.past)} name="Прошедшее единоразовое время" mode={mode}/>

        </div>
    );
}