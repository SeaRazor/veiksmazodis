import styles from './ui.module.css'
import commonStyles from '@/app/page.module.css'
import {Fragment} from "react";
import {IconEye, IconTextSpellcheck} from "@tabler/icons-react";

export function ModeSwitcher({current, onModeSwitch}) {
    const options = [
        {
            id: "check",
            name: "Изучение",
            iconComponent: <IconEye size={24} className={styles.tab_icon}/>,
            order : 10
        },
        {
            id: "test",
            name: "Проверка",
            iconComponent: <IconTextSpellcheck size={24} className={styles.tab_icon}/>,
            order: 20
        }
    ];
    return (
        <>
            {options.sort((a,b) => b.order - a.order).map((option) => {
                return (
                    <Fragment key={option.id}>
                        <input type="radio" id={option.id} name="modeTabGroup" className={styles.tab}
                               checked={current === option.id}
                               onChange={() => onModeSwitch(option.id)}/>

                        <label htmlFor={option.id}>
                            <div className={commonStyles.flow} style={{padding: 0}}>
                                {/*{option.iconComponent}*/}
                                <span className={styles.tab_text}>{option.name}</span></div>
                        </label>
                    </Fragment>
                );
            })}
        </>
    );
}
