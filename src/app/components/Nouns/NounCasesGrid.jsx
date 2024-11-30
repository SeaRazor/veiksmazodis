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
    const nominative = {single : nounCases["single"]["nominative"], plural: nounCases["plural"]["nominative"]};
    const genitive = {single: nounCases["single"]["genitive"], plural: nounCases["plural"]["genitive"]};
    const dative = {single: nounCases["single"]["dative"], plural: nounCases["plural"]["dative"] };
    const accusative = {single: nounCases["single"]["accusative"], plural: nounCases["plural"]["accusative"]};
    const instrumental = {single: nounCases["single"]["instrumental"], plural: nounCases["plural"]["instrumental"]};
    const locative = {single: nounCases["single"]["locative"], plural: nounCases["plural"]["locative"]};
    const vocative = {single: nounCases["single"]["vocative"], plural: nounCases["plural"]["vocative"]};

    return (
        <div className={styles.flow}>
            <NounCaseItem mode={mode} {...nominative} name="Именительный"/>
            <NounCaseItem mode={mode} {...genitive} name="Родительный"/>
            <NounCaseItem mode={mode} {...dative} name="Дательный" />
            <NounCaseItem mode={mode} {...accusative} name="Винительный" />
            <NounCaseItem mode={mode} {...instrumental} name="Творительный (инструментальный)"/>
            <NounCaseItem mode={mode} {...locative} name="Предложный (местный)"/>
            <NounCaseItem mode={mode} {...vocative} name="Звательный"/>
        </div>

    );
}
