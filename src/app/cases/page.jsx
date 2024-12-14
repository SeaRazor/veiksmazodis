'use client';
import {toast, ToastContainer} from "react-toastify";
import styles from "@/app/page.module.css";
import {IconDice5Filled} from "@tabler/icons-react";
import {useState} from "react";
import {getRandomNoun, searchNoun} from "@/app/utils/nouns";
import NounInfo from "@/app/components/Nouns/NounInfo";
import NounCasesGrid from "@/app/components/Nouns/NounCasesGrid";
import {ModeSwitcher} from "@/app/UI/ModeSwitcher";
import {SearchInput} from "@/app/UI/SearchInput";

export default function Cases() {

    const [noun, setNoun] = useState();
    const [mode, setMode] = useState("check");
    const [searchValue, setSearchValue] = useState('');

    function handleUserMode(selectedMode) {
        setMode(selectedMode);
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
        const newNoun = getRandomNoun();
        setNoun(newNoun);
        setSearchValue(newNoun.noun);

    }

    return (
        <>
            <ToastContainer hideProgressBar={true} position="top-center" autoClose="2000" closeOnClick={true}/>

            <div className={styles.input_flow}>
                <SearchInput searchHandler={searchNounFromInput} currentValue={searchValue}
                             placeholder="Введите сущесвительное на литовском или перевод на русский"/>
                <button onClick={handleGetNewNoun} title="Получить случайное слово" className={styles.secondary_button}>
                    <IconDice5Filled size={20}/>
                    <span className={styles.hidden_on_mobile}>Случайный</span>
                </button>


            </div>
            <NounInfo  {...noun}/>
            {noun && <div className={styles.tab_container}>
                <ModeSwitcher current={mode} onModeSwitch={handleUserMode}/>
                {mode && <NounCasesGrid word={noun} mode={mode}/>}
            </div>}


        </>
    );

}
