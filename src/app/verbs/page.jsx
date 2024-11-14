'use client';
import {useState} from "react";
import {getRandomVerb, searchVerb} from "@/app/utils/verbs";
import {toast, ToastContainer} from "react-toastify";
import VerbInfo from "@/app/components/Verbs/VerbInfo";
import VerbFormsGrid from "@/app/components/Verbs/VerbFormsGrid";
import styles from "@/app/page.module.css";
import {IconDice5Filled, IconSearch} from "@tabler/icons-react";
import Toggle from "@/app/UI/Toggle";

export default function VerbsTrainer(props) {

    const [verb, setVerb] = useState();
    const [mode, setMode] = useState("check");

    function handleGetNewVerb() {
        setVerb(getRandomVerb());
    }

    function handleUserMode(selectedMode) {
        /* const selectedMode = document.querySelector('input[name="mode"]:checked').value;*/
        setMode(selectedMode);
    }

    function handleSearchInput(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchVerbFromInput(e.target.value);
        }
    }

    function handleSearchButtonClick() {
        const searchValue = document.getElementById('searchInput').value;
        searchVerbFromInput(searchValue);

    }

    function searchVerbFromInput(searchValue) {
        const searchResult = searchVerb(searchValue);
        if (searchResult) {
            setVerb(searchResult);
        } else {
            toast.error('Глагол не найден. Попробуйте поискать другой или выберите случайный', {})

        }
    }

    return <>
        <ToastContainer hideProgressBar={true} position="top-center" autoClose="3000" closeOnClick={true}/>


        <div className={styles.input_flow}>

            <input className={styles.search_input} type="text"
                   id="searchInput"
                   placeholder="Введите инфинитив на литовском или перевод на русский"
                   onKeyUp={handleSearchInput}/>


            <button onClick={handleSearchButtonClick} title="Найти глагол" className={styles.default_button}>
                <IconSearch size={20}/>
                <span className={styles.hidden_on_mobile}>Найти</span>
            </button>
            <button onClick={handleGetNewVerb} title="Получить случайный глагол" className={styles.secondary_button}>
                <IconDice5Filled size={20}/>
                <span className={styles.hidden_on_mobile}>Случайный</span>
            </button>
            {verb && <Toggle id="mode_toggle" name1="Посмотреть" name2="Проверить" value1="check" value2="test"
                             currentValue={mode}
                             onChangeHandler={handleUserMode}/>}

        </div>


        <VerbInfo  {...verb}/>


        {(mode && verb) && <VerbFormsGrid
            verb_forms={verb}
            mode={mode}
        />
        }
    </>;
}
