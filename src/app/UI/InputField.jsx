import styles from "@/app/page.module.css";
import {useState} from "react";

export default function InputField({label, correct_value, isCheck, id}) {
    const [inputValue, setInputValue] = useState('');
    const [checkInputClassName, setCheckInputClassName] = useState('');

    const inputClassName = isCheck ? "check_value" : "input_input";


    function handleInputChange(event) {
        if (event.target.value === "") {
            setCheckInputClassName('');
        }
        setInputValue(event.target.value);
    }


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
            <label htmlFor={id} className={styles.input_label}>{label}</label>
            <input type="text" id={id} name={id} value={isCheck ? correct_value : inputValue}
                   onChange={handleInputChange}
                   onBlur={handleInputLeave} readOnly={isCheck}
                   className={`${styles[inputClassName]} ${isCheck ? '' : styles[checkInputClassName]}`}/>
            {/* {!isCheck && <button onClick={handleInputLeave} title="Проверить" className={commonStyles.default_button}>
                <IconCheck size={12}/>
            </button>}*/}


        </div>

    );

}