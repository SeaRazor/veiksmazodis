import styles from "../../page.module.css";
import InputField from "@/app/UI/InputField";

export default function NounCaseItem({
                                         mode,
                                         number,
                                         accusative,
                                         dative,
                                         genitive,
                                         instrumental,
                                         locative,
                                         nominative,
                                         vocative
                                     }) {
    return (
        <div className={styles.card}>
            <h4 style={{textAlign: "center"}}>{number === "single" ? "Единственное число" : "Множественное число"}</h4>
            <div className={styles.cards_grid}>
                <InputField key={"nominative_" + number} label="Именительный" correct_value={nominative}
                            isCheck={mode === 'check'}/>
                <InputField key={"genitive_" + number} label="Родительный" correct_value={genitive}
                            isCheck={mode === 'check'}/>
                <InputField key={"dative_" + number} label="Дательный" correct_value={dative}
                            isCheck={mode === 'check'}/>
                <InputField key={"accusative_" + number} label="Винительный" correct_value={accusative}
                            isCheck={mode === 'check'}/>
                <InputField key={"instrumental_" + number} label="Творительный" correct_value={instrumental}
                            isCheck={mode === 'check'}/>
                <InputField key={"locative_" + number} label="Местный" correct_value={locative}
                            isCheck={mode === 'check'}/>
                <InputField key={"vocative_" + number} label="Предложный" correct_value={vocative}
                            isCheck={mode === 'check'}/>

            </div>

        </div>
    );
}

