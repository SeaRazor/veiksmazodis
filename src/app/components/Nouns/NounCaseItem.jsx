import commonStyles from "../../page.module.css";
import styles from './noun.module.css';
import InputField from "@/app/UI/InputField";

export default function NounCaseItem({
                                         mode,
                                         name,
                                         questions,
                                         single,
                                         plural
                                     }) {
    return (
        <div className={commonStyles.card}>
            <div className={styles.noun_name}>{name} ({questions})</div>
            <div className={commonStyles.cards_grid}>
                <InputField label="Единственное" correct_value={single}
                            isCheck={mode === 'check'}/>
                <InputField label="Множественное" correct_value={plural}
                            isCheck={mode === 'check'}/>

            </div>

        </div>
    );
}

