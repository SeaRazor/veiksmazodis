'use client';
import {toast, ToastContainer} from "react-toastify";
import styles from "@/app/page.module.css";
import {IconDice5Filled, IconSearch} from "@tabler/icons-react";
import {useState} from "react";
import {getRandomNoun, searchNoun} from "@/app/utils/nouns";
import NounInfo from "@/app/components/Nouns/NounInfo";

export default function Cases() {

    const [noun, setNoun] = useState();
    const [mode, setMode] = useState();

    function handleUserMode() {
        const selectedMode = document.querySelector('input[name="mode"]:checked').value;
        setMode(selectedMode);
    }

    function handleSearchInput(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchNounFromInput(e.target.value);
        }
    }

    function handleSearchButtonClick() {
        const searchValue = document.getElementById('searchVerbString').value;
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
                       placeholder="Введите слово на литовском или перевод на русский"
                       onKeyUp={handleSearchInput}/>


                <button onClick={handleSearchButtonClick} title="Найти слово" className={styles.default_button}>
                    <IconSearch size={20}/>
                    <span className={styles.hidden_on_mobile}>Найти</span>
                </button>
                <button onClick={handleGetNewNoun} title="Получить случайное слово" className={styles.red_button}>
                    <IconDice5Filled size={20}/>
                    <span className={styles.hidden_on_mobile}>Случайный</span>
                </button>
                <div onChange={handleUserMode} className={styles.radio}>
                    <label>
                        <input type="radio" name="mode" value="check"/>
                        <span>Посмотреть</span>
                    </label>
                    <label>
                        <input type="radio" name="mode" value="test"/>
                        <span>Проверить себя</span>
                    </label>

                </div>


            </div>

            <NounInfo  {...noun}/>
        </>
    );

}