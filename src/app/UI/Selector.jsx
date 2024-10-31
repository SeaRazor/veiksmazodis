import styles from './ui.module.css'

export function Selector({options, optionSelectedFunction, defaultValue = null}) {

    function handleOptionSelect(event) {
        optionSelectedFunction(event.target.value);
    }

    return (
        <select className={styles.selector} onChange={handleOptionSelect}>
            {!defaultValue && <option>Выберите тему</option>}
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    );
}