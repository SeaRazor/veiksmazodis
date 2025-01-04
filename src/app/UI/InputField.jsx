import styles from "@/app/page.module.css";
import {useEffect, useState} from "react";
import {IconHelp, IconQuestionMark} from "@tabler/icons-react";

export default function InputField({label, correct_value, isCheck, id}) {
    const [inputValue, setInputValue] = useState('');
    const [checkInputClassName, setCheckInputClassName] = useState('');
    const [helpRequested, setHelpRequested] = useState(false);

    let inputClassName = isCheck ? "check_value" : "input_input";

    useEffect(() => {
        setInputValue('');
        setCheckInputClassName('');
        setHelpRequested(false);
    }, [correct_value]);

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

    function handleRequestHelp() {
        setHelpRequested(true);
        setCheckInputClassName('');
        inputClassName = 'check_value';
    }

    return (
        <div className={styles.input_field}>
            <label htmlFor={id} className={styles.input_label}>{label}</label>
            <div className={styles.input_container}   style={{border: isCheck ? 'none' : ''}}>
            <input type="text" id={id} name={id} value={isCheck || helpRequested ? correct_value : inputValue}
                   onChange={handleInputChange}
                   onBlur={handleInputLeave} readOnly={isCheck}
                   className={`${helpRequested ? styles['check_value'] : styles[inputClassName]} ${isCheck ? '' : styles[checkInputClassName]}`}
                   disabled={!!isCheck || helpRequested}

            />
             {(!isCheck ) &&  <button onClick={handleRequestHelp} title="Помощь" className={styles.inner_button} tabIndex={-1} disabled={helpRequested}>
                 <IconHelp size={20} cla/>
            </button>}
            </div>


        </div>

    );

}
