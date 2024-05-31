import styles from "../page.module.css";
import VerbTimeFace from "@/app/components/VerbTimeFace";

export default function VerbFormItem({
                                         first_singular,
                                         second_singular,
                                         third_singular,
                                         first_plural,
                                         second_plural,
                                         third_plural,
                                         name,
                                         mode
                                     }) {
    const isCheck = mode === 'check';


    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.item_grid}>
                <VerbTimeFace key="first_singular" label="Aš" correct_value={first_singular} isCheck={isCheck}
                              id="first_singular"/>
                <VerbTimeFace key="second_singular" label="Tu" correct_value={second_singular} isCheck={isCheck}
                              id="second_singular"/>
                <VerbTimeFace key="third_singular" label="Jis, Ji" correct_value={third_singular} isCheck={isCheck}
                              id="third_singular"/>
                <VerbTimeFace key="first_plural" label="Mes" correct_value={first_plural} isCheck={isCheck}
                              id="first_plural"/>
                <VerbTimeFace key="second_plural" label="Jūs" correct_value={second_plural} isCheck={isCheck}
                              id="second_plural"/>
                <VerbTimeFace key="third_plural" label="Jie, Jos" correct_value={third_plural} isCheck={isCheck}
                              id="third_plural"/>

            </div>
        </div>
    );
}