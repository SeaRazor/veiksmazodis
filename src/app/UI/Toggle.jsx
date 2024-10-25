import styles from "@/app/page.module.css";
import {useState} from "react";
import Flag from "react-flagkit";

export default function Toggle({name1, name2, value1, value2, currentValue, onChangeHandler, useFlags = false}) {
    const [selected, setSelected] = useState();

    function checkHandler(event) {
        onChangeHandler(event.target.value);
    }

    return (

        <div className={styles.switch_field}>
            <input type="radio" id="radio-one" name="switch-one" value={value1} onChange={checkHandler}
                   checked={value1 === currentValue}/>
            <label htmlFor="radio-one">{useFlags ? <Flag country={name1} size="18"/> : name1}</label>
            <input type="radio" id="radio-two" name="switch-one" value={value2} onChange={checkHandler}
                   checked={value2 == currentValue}/>
            <label htmlFor="radio-two">{useFlags ? <Flag country={name2} size="18"/> : name2}</label>
        </div>


    )


}