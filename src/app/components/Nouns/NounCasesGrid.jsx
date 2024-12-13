import {generateNounCases} from "@/app/utils/case_generation";
import styles from "@/app/page.module.css";
import NounCaseItem from "@/app/components/Nouns/NounCaseItem";

export default function NounCasesGrid({word, mode}) {
    const {noun, gender, palatalize} = word;
    const nounCases = generateNounCases(noun, gender, palatalize);
    if (!nounCases) {
        return null;
    }
    const singleNounCases = nounCases["single"];
    const pluralNounCases = nounCases["plural"];
    const nominative = {single: nounCases["single"]["nominative"], plural: nounCases["plural"]["nominative"]};
    const genitive = {single: nounCases["single"]["genitive"], plural: nounCases["plural"]["genitive"]};
    const dative = {single: nounCases["single"]["dative"], plural: nounCases["plural"]["dative"]};
    const accusative = {single: nounCases["single"]["accusative"], plural: nounCases["plural"]["accusative"]};
    const instrumental = {single: nounCases["single"]["instrumental"], plural: nounCases["plural"]["instrumental"]};
    const locative = {single: nounCases["single"]["locative"], plural: nounCases["plural"]["locative"]};
    const vocative = {single: nounCases["single"]["vocative"], plural: nounCases["plural"]["vocative"]};

    return (
        <div className={styles.flow}>
            <NounCaseItem mode={mode} {...nominative} name="Именительный" questions="Kas?"/>
            <NounCaseItem mode={mode} {...genitive} name="Родительный" questions="Ko?"/>
            <NounCaseItem mode={mode} {...dative} name="Дательный" questions="Kam?"/>
            <NounCaseItem mode={mode} {...accusative} name="Винительный" questions="Ką?"/>
            <NounCaseItem mode={mode} {...instrumental} name="Творительный (инструментальный)" questions="Kuo?"/>
            <NounCaseItem mode={mode} {...locative} name="Предложный (местный)" questions="Kur? Kame?"/>
            <NounCaseItem mode={mode} {...vocative} name="Звательный" questions="Kas?"/>
        </div>

    );
}
