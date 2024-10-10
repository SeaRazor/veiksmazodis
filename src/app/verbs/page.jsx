'use client';
import {useState} from "react";
import {getRandomVerb, searchVerb} from "@/app/utils/verbs";
import {toast, ToastContainer} from "react-toastify";
import VerbInfo from "@/app/components/Verbs/VerbInfo";
import VerbFormsGrid from "@/app/components/Verbs/VerbFormsGrid";
import styles from "@/app/page.module.css";
import {IconDice5Filled, IconSearch} from "@tabler/icons-react";

export default function VerbsTrainer(props) {

    const [verb, setVerb] = useState();
    const [mode, setMode] = useState();

    function handleGetNewVerb() {
        setVerb(getRandomVerb());
    }

    function handleUserMode() {
        const selectedMode = document.querySelector('input[name="mode"]:checked').value;
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
            <button onClick={handleGetNewVerb} title="Получить случайный глагол" className={styles.red_button}>
                <IconDice5Filled size={20}/>
                <span className={styles.hidden_on_mobile}>Случайный</span>
            </button>
            {verb && <div onChange={handleUserMode} className={styles.radio}>
                <label>
                    <input type="radio" name="mode" value="check"/>
                    <span>Посмотреть</span>
                </label>
                <label>
                    <input type="radio" name="mode" value="test"/>
                    <span>Проверить себя</span>
                </label>

            </div>}


        </div>


        <VerbInfo  {...verb}/>


        {(mode && verb) && <VerbFormsGrid
            verb_forms={verb}
            mode={mode}
        />
        }
    </>;
}
