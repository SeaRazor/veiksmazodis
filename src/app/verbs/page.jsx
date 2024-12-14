'use client';
import {useState} from "react";
import {getRandomVerb, searchVerb} from "@/app/utils/verbs";
import {toast, ToastContainer} from "react-toastify";
import VerbInfo from "@/app/components/Verbs/VerbInfo";
import VerbFormsGrid from "@/app/components/Verbs/VerbFormsGrid";
import styles from "@/app/page.module.css";
import {IconDice5Filled} from "@tabler/icons-react";
import {ModeSwitcher} from "@/app/UI/ModeSwitcher";
import Toggle from "@/app/UI/Toggle";
import {SearchInput} from "@/app/UI/SearchInput";

export default function VerbsTrainer(props) {

    const [verb, setVerb] = useState();
    const [mode, setMode] = useState("check");
    const [isDirect, setDirection] = useState(true);
    const [searchValue, setSearchValue] = useState('');


    function handleGetNewVerb() {
        const newVerb = getRandomVerb(isDirect)
        setVerb(newVerb);
        setSearchValue(newVerb.infinitive)
    }

    function handleUserMode(selectedMode) {
        /* const selectedMode = document.querySelector('input[name="mode"]:checked').value;*/
        setMode(selectedMode);
    }

    function handleTypeChange() {
        setDirection(prevState => !prevState);
        setVerb('');
    }

    function searchVerbFromInput(searchValue) {
        const searchResult = searchVerb(searchValue, isDirect);
        if (searchResult) {
            setVerb(searchResult);
        } else {
            toast.error('Глагол не найден. Попробуйте поискать другой или выберите случайный', {})

        }
    }

    return <>
        <ToastContainer hideProgressBar={true} position="top-center" autoClose="3000" closeOnClick={true}/>


        <div className={styles.input_flow}>

            <Toggle id="type_toggle" name1="Прямые" name2="Возвратные" value1="direct" value2="reflex"
                    onChangeHandler={handleTypeChange}
            />

            <SearchInput searchHandler={searchVerbFromInput} currentValue={searchValue}
                         placeholder="Введите инфинитив на литовском или русском"/>
            <button onClick={handleGetNewVerb} title="Получить случайный глагол" className={styles.secondary_button}>
                <IconDice5Filled size={20}/>
                <span className={styles.hidden_on_mobile}>Случайный</span>
            </button>
            {/*{verb && <Toggle id="mode_toggle" name1="Посмотреть" name2="Проверить" value1="check" value2="test"
                             currentValue={mode}
                             onChangeHandler={handleUserMode}/>}*/}

        </div>
        {verb && <VerbInfo  {...verb}/>}
        {verb && <div className={styles.tab_container}>
            <ModeSwitcher current={mode} onModeSwitch={handleUserMode}/>
            {mode && <VerbFormsGrid verb_forms={verb} mode={mode} isDirect={isDirect}/>}
        </div>
        }
    </>;
}
