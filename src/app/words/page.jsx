'use client';
import styles from "./page.module.css";
import commonStyles from "@/app/page.module.css";
import {getTopics} from "@/app/utils/words";
import {useState} from "react";
import Toggle from "@/app/UI/Toggle";
import {Selector} from "@/app/UI/Selector";
import {DisplayTopicWords} from "@/app/components/Words/DisplayTopicWords";
import {TestTopicWords} from "@/app/components/Words/TestTopicWords";
import {ModeSwitcher} from "@/app/UI/ModeSwitcher";

export default function Words() {

    const topics = getTopics();
    const [selectedTopic, setSelectedTopic] = useState("");
    const [direction, setDirection] = useState("forward");
    const [mode, setMode] = useState("check");


    function handleTopicSelection(topic) {

        switch (topic) {
            case "Выберите тему":
                setSelectedTopic("");
                break;
            case "Все":
                setSelectedTopic("all");
                break;
            default:
                setSelectedTopic(topic);
                break;
        }


    }


    function handleDirectionChange() {
        const newDirection = direction == "forward" ? "reverse" : "forward";
        setDirection(newDirection);


    }


    function handleModeChange(selectedMode) {
        setMode(selectedMode);
    }

    return (
        <div className={styles.page_content}>

            <div className={styles.wrapping_container}>
                <div className={commonStyles.input_flow}>
                    <Toggle id="lang_toggle" name1="LT" value1="forward" name2="RU" value2="reverse"

                            onChangeHandler={handleDirectionChange} useFlags="true"/>

                    <Selector options={topics} optionSelectedFunction={handleTopicSelection} includeAllOption={false}/>


                </div>
                {selectedTopic && <div className={commonStyles.tab_container}>
                    <ModeSwitcher current={mode} onModeSwitch={handleModeChange}/>
                    {mode === 'check' ? <DisplayTopicWords selectedTopic={selectedTopic} direction={direction}/>
                        : <TestTopicWords selectedTopic={selectedTopic} direction={direction}/>}
                </div>}

            </div>

        </div>
    );
}