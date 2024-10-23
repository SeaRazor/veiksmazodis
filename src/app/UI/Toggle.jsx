import styles from "@/app/page.module.css";
import {useState} from "react";

export default function Toggle({name1, name2, value1, value2, currentValue, onChangeHandler}) {
    const [selected, setSelected] = useState();

    function checkHandler(event) {
        onChangeHandler(event.target.value);
    }

    return (

        <div class={styles.switch_field}>
            <input type="radio" id="radio-one" name="switch-one" value={value1} onChange={checkHandler}
                   checked={value1 === currentValue}/>
            <label for="radio-one">{name1}</label>
            <input type="radio" id="radio-two" name="switch-one" value={value2} onChange={checkHandler}
                   checked={value2 == currentValue}/>
            <label for="radio-two">{name2}</label>
        </div>


    )


}