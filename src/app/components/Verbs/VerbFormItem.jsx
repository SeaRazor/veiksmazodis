import styles from "../../page.module.css";
import InputField from "@/app/UI/InputField";


export default function VerbFormItem({
                                         first_singular,
                                         second_singular,
                                         third_singular,
                                         first_plural,
                                         second_plural,
                                         third_plural,
                                         name,
                                         mode,
                                         isImperative = false,
                                         infinitive
                                     }) {
    const isCheck = mode === 'check';


    return (
        <div className={styles.card}>
            <div style={{textAlign: "center"}}>{name}</div>
            <div className={styles.column_flow}>
                <InputField key={"first_singular_" + infinitive} label="Aš" correct_value={first_singular}
                            isCheck={isCheck || isImperative}
                            id={"first_singular_" + infinitive}/>
                <InputField key={"second_singular_" + infinitive} label="Tu" correct_value={second_singular}
                            isCheck={isCheck}
                            id={"second_singular_" + infinitive}/>
                <InputField key={"third_singular_" + infinitive} label="Jis, Ji" correct_value={third_singular}
                            isCheck={isCheck || isImperative}
                            id={"third_singular_" + infinitive}/>
                <InputField key={"first_plural_" + infinitive} label="Mes" correct_value={first_plural}
                            isCheck={isCheck}
                            id={"first_plural_" + infinitive}/>
                <InputField key={"second_plural_" + infinitive} label="Jūs" correct_value={second_plural}
                            isCheck={isCheck}
                            id={"second_plural_" + infinitive}/>
                <InputField key={"third_plural_" + infinitive} label="Jie, Jos" correct_value={third_plural}
                            isCheck={isCheck || isImperative}
                            id={"third_plural_" + infinitive}/>

            </div>
        </div>
    );
}
