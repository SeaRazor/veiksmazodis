import styles from "@/app/page.module.css";
import {useRef, useState} from "react";

export default function VerbTimeFace({label, correct_value, isCheck, id}) {
    const inputValueRef = useRef(null);
    const [isCorrect, setIsCorrect] = useState();
    const [inputValue, setInputValue] = useState('');
    const [checkInputClassName, setCheckInputClassName] = useState('');

    let input;


    function handleInputChange(event) {
        if (event.target.value === "") {
            setCheckInputClassName('');
        }
        setInputValue(event.target.value);
    }

    /*

        if (isCheck) {
            input = <input type="text" id={id} name={id} value={correct_value} style={{fontSize: "14px"}} disabled/>
        } else {


            input = <input type="text" id={id} name={id}
                           value={inputValue}
                           onChange={handleInputChange}
                           onBlur={handleInputLeave}
                           className={styles[checkInputClassName]}
            />
        }
    */

    function handleInputLeave(event) {
        if (event.target.value === "") {
            setCheckInputClassName('');
        } else if (event.target.value === correct_value) {
            setCheckInputClassName('correct_input')
        } else {
            setCheckInputClassName('incorrect_input')
        }

    }

    return (
        <div className={styles.input_field}>
            <label htmlFor={id} style={{width: '30%'}}>{label}</label>

            {isCheck
                ? <span className={styles.check_value}>{correct_value}</span>
                : <input type="text" id={id} name={id} value={inputValue} onChange={handleInputChange}
                         onBlur={handleInputLeave}
                         className={styles[checkInputClassName]}/>
            }

        </div>

    );

}