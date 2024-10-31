'use client';
import styles from "./page.module.css";
import commonStyles from "@/app/page.module.css";
import {getTopics, getTopicWords} from "@/app/utils/words";
import {useEffect, useRef, useState} from "react";
import FlipCard2 from "@/app/UI/FlipCard2";
import Toggle from "@/app/UI/Toggle";
import {shuffle} from "@/app/utils/helpers";
import {Selector} from "@/app/UI/Selector";

export default function Words() {

    const topics = getTopics();
    const [selectedTopic, setSelectedTopic] = useState();
    const [direction, setDirection] = useState("forward");
    const [topicWords, setTopicWords] = useState([]);
    const [filteredWords, setFilteredWords] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const topicWords = getTopicWords(selectedTopic);
        setTopicWords(topicWords);
        setFilteredWords(topicWords);
    }, [selectedTopic]);


    function handleTopicSelection(topic) {

        if (topic == "Выберите тему") {
            setSelectedTopic("");
        } else {
            setSelectedTopic(topic);
        }

        setDirection("forward");
        inputRef.current.value = "";
    }


    function handleDirectionChange() {
        const newDirection = direction == "forward" ? "reverse" : "forward";
        setDirection(newDirection);
        inputRef.current.value = "";
        setFilteredWords(topicWords);
    }

    function handleSearchInput(e) {
        const searchString = e.target.value;
        if (!searchString) setFilteredWords(topicWords);
        const filteredTopicWords = topicWords.filter((word) => {
            if (direction === 'forward') {
                return word.word.toLowerCase().includes(searchString.toLowerCase());
            } else {
                return word.translation.toLowerCase().includes(searchString.toLowerCase());
            }
        });
        setFilteredWords(filteredTopicWords);
    }

    return (
        <div className={styles.page_content}>
            {/*<div className={styles.topics_container}>
                <ul className={styles.topics_list}>
                    {topics.map((topic, index) => <li id={topic} key={topic}
                                                      className={`${styles.topic_item} ${topic === selectedTopic ? styles.topic_item_active : ''} `}
                                                      onClick={handleTopicSelection}>{topic}</li>)}
                </ul>
            </div>*/}
            <div className={styles.wrapping_container}>
                <div className={commonStyles.input_flow}>
                    <Toggle name1="LT" value1="forward" name2="RU" value2="reverse" currentValue={direction}
                            onChangeHandler={handleDirectionChange} useFlags="true"/>
                    <input className={commonStyles.search_input} type="text"
                           id="searchString"
                           placeholder="Введите слово"
                           ref={inputRef}
                           onKeyUp={handleSearchInput}/>
                    <Selector options={topics} optionSelectedFunction={handleTopicSelection}/>


                </div>
                <div className={styles.words_container}>
                    {selectedTopic && shuffle(filteredWords).map((word, index) => <FlipCard2
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