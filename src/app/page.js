"use client";
import styles from "./page.module.css";
import {getRandomVerb, searchVerb} from "@/app/utils/verbs";
import Verb from "@/app/components/Verb";
import {useState} from "react";
import VerbFormsGrid from "@/app/components/VerbFormsGrid";
import {IconDice5Filled} from "@tabler/icons-react";
import {toast, ToastContainer} from "react-toastify";


export default function Home() {

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
            const inputValue = e.target.value;
            const newVerb = searchVerb(inputValue);
            if (newVerb) {
                setVerb(newVerb);
            } else {
                toast.error('Глагол не найден. Попробуйте поискать другой или выберите случайный', {})

            }

        }
    }

    return (
        <main className={styles.main}>
            <ToastContainer hideProgressBar={true} position="top-center" autoClose="3000" closeOnClick={true}/>
            <div className={styles.flow}>
                <img src="/lithuania_64.png"/>
                <h2>
                    Veiksmažodžiai!
                </h2>

            </div>


            <div className={styles.input_flow}>
                <div className={styles.input_field} style={{padding: 0}}>
                    <input type="text" style={{width: '100%'}}
                           placeholder="Введите инфинитив на литовском или перевод на русский"
                           onKeyUp={handleSearchInput}/>

                </div>
                <div onClick={handleGetNewVerb} title="Получить случайный глагол">
                    <IconDice5Filled size={30} className={styles.hoveredIcon}/>
                </div>


            </div>
            {verb && <Verb
                key={verb.infinitive}
                infinitive={verb.infinitive}
                present={verb.present}
                past={verb.past} t
                translation={verb.translation}/>
            }
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


            {(mode && verb) && <VerbFormsGrid
                verb_forms={verb}
                mode={mode}
            />
            }

        </main>
    );
}



