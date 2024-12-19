import styles from './ui.module.css';
import {useState} from "react";
import {CustomFlag} from "@/app/UI/CustomFlag";

export default function Toggle({id, name1, name2, value1, value2, currentValue, onChangeHandler, useFlags = false}) {
    const [selected, setSelected] = useState(currentValue ? currentValue : value1);

    function checkHandler(event) {
        setSelected(event.target.value);
        onChangeHandler(event.target.value);
    }

    return (

        <div className={styles.switch_field}>
            <input type="radio" id={`${id}_${value1}`} name={id} value={value1} onChange={checkHandler}
                   checked={value1 === selected}/>
            <label htmlFor={`${id}_${value1}`}>{useFlags ? <CustomFlag country={name1}/> : name1}</label>
            <input type="radio" id={`${id}_${value2}`} name={id} value={value2} onChange={checkHandler}
                   checked={value2 === selected}/>
            <label htmlFor={`${id}_${value2}`}>{useFlags ? <CustomFlag country={name2}/> : name2}</label>
        </div>


    )


}