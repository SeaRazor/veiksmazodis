import {generateNounCases} from "@/app/utils/case_generation";
import styles from "@/app/page.module.css";

export default function NounCasesGrid({noun, gender, translation, mode}){
    const nounCases =  generateNounCases(noun, gender);
    const singleNounCases = nounCases["single"];
    const pluralNounCases = nounCases["plural"];
    return (
        <div className={styles.flow}>
            {for (const property in nounCases)

            }

        </div>

    );
}
