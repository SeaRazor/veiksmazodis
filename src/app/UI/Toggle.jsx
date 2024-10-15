import styles from "@/app/page.module.css";
import {useState} from "react";

export default function Toggle({value1, value2, onChangeHandler}) {
    const [selected, setSelected] = useState();

    function checkHandler(event) {
        onChangeHandler(event.target.value);
    }

    return (

        <div class={styles.switch_field}>
            <input type="radio" id="radio-one" name="switch-one" value={value1} onChange={checkHandler}/>
            <label for="radio-one">Посмотреть</label>
            <input type="radio" id="radio-two" name="switch-one" value={value2} onChange={checkHandler}/>
            <label for="radio-two">Проверить себя</label>
        </div>


    )


}