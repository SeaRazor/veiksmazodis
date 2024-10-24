'use client';
import styles from "./page.module.css";
import {getTopics, getTopicWords} from "@/app/utils/words";
import {useState} from "react";
import FlipCard2 from "@/app/UI/FlipCard2";
import Toggle from "@/app/UI/Toggle";

export default function Words() {

    const topics = getTopics();
    const [selectedTopic, setSelectedTopic] = useState();
    const [direction, setDirection] = useState("forward");

    function handleTopicSelection(event) {
        setSelectedTopic(event.target.id);
        setDirection("forward");


    }


    function directionChangeHandler() {
        const newDirection = direction == "forward" ? "reverse" : "forward";
        setDirection(newDirection);
    }

    return (
        <div className={styles.page_content}>
            <div className={styles.topics_container}>
                <ul className={styles.topics_list}>
                    {topics.map((topic, index) => <li id={topic} key={topic}
                                                      className={`${styles.topic_item} ${topic === selectedTopic ? styles.topic_item_active : ''} `}
                                                      onClick={handleTopicSelection}>{topic}</li>)}
                </ul>
            </div>
            <div className={styles.wrapping_container}>
                <div className={styles.input_container}>
                    <Toggle name1="LT" value1="forward" name2="RU" value2="reverse" currentValue={direction}
                            onChangeHandler={directionChangeHandler} useFlags="true"/>
                </div>
                <div className={styles.words_container}>
                    {selectedTopic && getTopicWords(selectedTopic).map((word, index) => <FlipCard2
                        key={word.word + index}
                        front={word.word}
                        back={word.translation}
                        direction={direction}/>
                    )}

                </div>
            </div>

        </div>
    );
}