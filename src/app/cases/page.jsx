'use client';
import {toast, ToastContainer} from "react-toastify";
import styles from "@/app/page.module.css";
import {IconDice5Filled, IconSearch} from "@tabler/icons-react";
import {useState} from "react";
import {getRandomNoun, searchNoun} from "@/app/utils/nouns";
import NounInfo from "@/app/components/Nouns/NounInfo";
import NounCasesGrid from "@/app/components/Nouns/NounCasesGrid";
import {ModeSwitcher} from "@/app/UI/ModeSwitcher";

export default function Cases() {

    const [noun, setNoun] = useState();
    const [mode, setMode] = useState("check");

    function handleUserMode(selectedMode) {
        setMode(selectedMode);
    }

    function handleSearchInput(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchNounFromInput(e.target.value);
        }
    }

    function handleSearchButtonClick() {
        const searchValue = document.getElementById('searchString').value;
        searchNounFromInput(searchValue);

    }

    function searchNounFromInput(searchValue) {
        const searchResult = searchNoun(searchValue);
        if (searchResult) {
            setNoun(searchResult);
        } else {
            toast.error('Слово не найдено. Попробуйте поискать другое или выберите случайное', {})

        }
    }

    function handleGetNewNoun() {
        setNoun(getRandomNoun());
    }

    return (
        <>
            <ToastContainer hideProgressBar={true} position="top-center" autoClose="3000" closeOnClick={true}/>

            <div className={styles.input_flow}>

                <input className={styles.search_input} type="text"
                       id="searchString"
                       placeholder="Введите слово на литовском или перевод на русский"
                       onKeyUp={handleSearchInput}/>


                <button onClick={handleSearchButtonClick} title="Найти слово" className={styles.default_button}>
                    <IconSearch size={20}/>
                    <span className={styles.hidden_on_mobile}>Найти</span>
                </button>
                <button onClick={handleGetNewNoun} title="Получить случайное слово" className={styles.secondary_button}>
                    <IconDice5Filled size={20}/>
                    <span className={styles.hidden_on_mobile}>Случайный</span>
                </button>
                {/*   {noun && <Toggle id="check" name1="Посмотреть" name2="Проверить" value1="check" value2="test"
                                 currentValue={mode}
                                 onChangeHandler={handleUserMode}/>}*/}


            </div>
            <NounInfo  {...noun}/>
            {noun && <div className={styles.tab_container}>
                <ModeSwitcher current={mode} onModeSwitch={handleUserMode}/>
                {mode && <NounCasesGrid word={noun} mode={mode}/>}
            </div>}


        </>
    );

}
