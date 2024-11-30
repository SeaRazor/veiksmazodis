import styles from "../../page.module.css";
import InputField from "@/app/UI/InputField";

export default function NounCaseItem({
                                         mode,
                                         name,
                                         single,
                                         plural
                                     }) {
    return (
        <div className={styles.card}>
            <h4 style={{textAlign: "center"}}>{name}</h4>
            <div className={styles.cards_grid}>
                <InputField  label="Единственное" correct_value={single}
                            isCheck={mode === 'check'}/>
                <InputField  label="Множественное" correct_value={plural}
                            isCheck={mode === 'check'}/>

            </div>

        </div>
    );
}

