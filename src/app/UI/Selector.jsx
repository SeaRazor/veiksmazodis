import styles from './ui.module.css'

export function Selector({options, optionSelectedFunction, defaultValue = null, includeAllOption = false}) {

    function handleOptionSelect(event) {
        optionSelectedFunction(event.target.value);
    }

    return (
        <select className={styles.selector} onChange={handleOptionSelect}>
            {!defaultValue && <option>Выберите тему</option>}
            {includeAllOption && <option>Все</option>}
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    );
}