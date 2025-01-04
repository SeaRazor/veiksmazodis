'use client';
import {useEffect, useState} from "react";
import {getRandomVerb, searchVerb} from "@/app/utils/verbs";
import {toast, ToastContainer} from "react-toastify";
import VerbInfo from "@/app/components/Verbs/VerbInfo";
import VerbFormsGrid from "@/app/components/Verbs/VerbFormsGrid";
import styles from "@/app/page.module.css";
import {IconDice5Filled, IconQuestionMark} from "@tabler/icons-react";
import {ModeSwitcher} from "@/app/UI/ModeSwitcher";
import Toggle from "@/app/UI/Toggle";
import {SearchInput} from "@/app/UI/SearchInput";
import InputField from "@/app/UI/InputField";

export default function VerbsTrainer(props) {

    const [verb, setVerb] = useState();
    const [mode, setMode] = useState("test");
    const [isDirect, setDirection] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [helpRequested, setHelpRequested] = useState(false);


    useEffect(() => {
        setHelpRequested(false);
    }, [verb]);


    function handleGetNewVerb() {
        const newVerb = getRandomVerb(isDirect)
        setVerb(newVerb);
        setSearchValue('');
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

    function handleHelpClick() {
        setHelpRequested(true);
    }

    return <>
        <ToastContainer hideProgressBar={true} position="top-center" autoClose="3000" closeOnClick={true}/>


        <div className={styles.input_flow}>


            <SearchInput searchHandler={searchVerbFromInput} currentValue={searchValue}
                         placeholder="Введите инфинитив на литовском или русском"/>
            <button onClick={handleGetNewVerb} title="Получить случайный глагол" className={styles.secondary_button}>
                <IconDice5Filled size={20}/>
                <span className={styles.hidden_on_mobile}>Случайный</span>
            </button>
            <Toggle id="type_toggle" name1="Прямые" name2="Возвратные" value1="direct" value2="reflex"
                    onChangeHandler={handleTypeChange}
            />


        </div>
        {verb && <div className={styles.word_info}>
            <InputField isCheck={true} correct_value={`${verb.infinitive} (${verb.translation})`}
                        label="Инфинитив"/>
            <InputField isCheck={mode === 'check' || helpRequested} correct_value={verb.present}
                        label="Настоящее"/>
            <InputField isCheck={mode === 'check' || helpRequested} correct_value={verb.past} label="Прошлое"/>
           {/* <button className={styles.default_button} title="Помощь" onClick={handleHelpClick} disabled={mode=== 'check' || helpRequested}
                    tabIndex="-1">
                <IconQuestionMark size={20}/>

            </button>*/}
        </div>
        }

        {verb && <div className={styles.tab_container}>
            <ModeSwitcher current={mode} onModeSwitch={handleUserMode}/>
            {mode && <VerbFormsGrid verb_forms={verb} mode={mode} isDirect={isDirect}/>}
        </div>
        }
    </>;
}
