import styles from "../../page.module.css";
import VerbTimeFace from "@/app/components/Verbs/VerbTimeFace";

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
            <h4 style={{textAlign: "center"}}>{name}</h4>
            <div className={styles.cards_grid}>
                <VerbTimeFace key={"first_singular_" + name} label="Aš" correct_value={first_singular} isCheck={isCheck}
                              id={"first_singular_" + name}/>
                <VerbTimeFace key={"second_singular_" + name} label="Tu" correct_value={second_singular}
                              isCheck={isCheck}
                              id={"second_singular_" + name}/>
                <VerbTimeFace key={"third_singular_" + name} label="Jis, Ji" correct_value={third_singular}
                              isCheck={isCheck}
                              id={"third_singular_" + name}/>
                <VerbTimeFace key={"first_plural_" + name} label="Mes" correct_value={first_plural} isCheck={isCheck}
                              id={"first_plural_" + name}/>
                <VerbTimeFace key={"second_plural_" + name} label="Jūs" correct_value={second_plural} isCheck={isCheck}
                              id={"second_plural_" + name}/>
                <VerbTimeFace key={"third_plural_" + name} label="Jie, Jos" correct_value={third_plural}
                              isCheck={isCheck}
                              id={"third_plural_" + name}/>

            </div>
        </div>
    );
}