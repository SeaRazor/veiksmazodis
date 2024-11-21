import styles from './ui.module.css'
import {Fragment} from "react";

export function ModeSwitcher({current, onModeSwitch}) {
    const options = [
        {
            id: "check",
            name: "Изучение"
        },
        {
            id: "test",
            name: "Проверка"
        }
    ];
    return (
        <>
            {options.map((option) => {
                return (
                    <Fragment key={option.id}>
                        <input type="radio" id={option.id} name="modeTabGroup" className={styles.tab}
                               checked={current === option.id}
                               onChange={() => onModeSwitch(option.id)}/>
                        <label htmlFor={option.id}><span className={styles.tab_text}>{option.name}</span></label>
                    </Fragment>
                );
            })}
            {/* <input type="radio" id="check" name="modeTabGroup" className="tab" checked={current === 'check'}/>
            <label htmlFor="check">Short</label>

            <input type="radio" id="tab2" name="modeTabGroup" className="tab" checked={current === 'test'}/>
            <label htmlFor="test">Medium</label>*/}
        </>
    );
}