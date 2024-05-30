import styles from "@/app/page.module.css";
import {useRef, useState} from "react";

export default function VerbTimeFace({label, correct_value, isCheck, id}) {
    const inputValueRef = useRef(null);
    const [isCorrect, setIsCorrect] = useState();
    const [inputValue, setInputValue] = useState('');
    const [checkInputClassName, setCheckInputClassName] = useState('');

    let input;


    if (isCheck) {
        input = <input type="text" id={id} name={id} value={correct_value} disabled/>
    } else {


        input = <input type="text" id={id} name={id}
                       value={inputValue}
                       onChange={handleInputLeave}
                       className={styles[checkInputClassName]}
        />
    }

    function handleInputLeave(event) {
        setInputValue(event.target.value);
        if (event.target.value === correct_value) {
            setCheckInputClassName('correct_input')
        } else {
            setCheckInputClassName('incorrect_input')
        }

    }

    return (
        <div className={styles.input_field}>
            <label htmlFor={id}>{label}</label>
            {input}

        </div>
    );

}