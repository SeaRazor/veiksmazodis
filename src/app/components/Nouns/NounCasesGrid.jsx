import {generateNounCases} from "@/app/utils/case_generation";
import styles from "@/app/page.module.css";
import NounCaseItem from "@/app/components/Nouns/NounCaseItem";

export default function NounCasesGrid({word, mode}) {
    const {noun, gender} = word;
    const nounCases = generateNounCases(noun, gender);
    if (!nounCases) {
        return null;
    }
    const singleNounCases = nounCases["single"];
    const pluralNounCases = nounCases["plural"];

    return (
        <div className={styles.flow}>
            <NounCaseItem mode={mode} number="single" {...singleNounCases}/>
            <NounCaseItem mode={mode} number="plural"  {...pluralNounCases}/>
        </div>

    );
}
