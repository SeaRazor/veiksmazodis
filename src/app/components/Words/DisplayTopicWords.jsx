import styles from "@/app/words/page.module.css";
import {shuffle} from "@/app/utils/helpers";
import FlipCard from "@/app/UI/FlipCard";
import commonStyles from "@/app/page.module.css";
import {useEffect, useRef, useState} from "react";
import {getWords} from "@/app/utils/words";

export function DisplayTopicWords({selectedTopic, direction}) {

    const [filteredWords, setFilteredWords] = useState([]);
    const [topicWords, setTopicWords] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const topicWords = getWords(selectedTopic);
        setTopicWords(topicWords);
        setFilteredWords(topicWords);
    }, [selectedTopic]);

    useEffect(() => {
        inputRef.current.value = '';
    }, [direction]);

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
        <div className={commonStyles.column_flow}>
            <input className={commonStyles.search_input} type="text"
                   id="searchString"
                   placeholder="Введите слово или его часть"
                   ref={inputRef}
                   onKeyUp={handleSearchInput}/>
            <div className={styles.words_container}>
                {selectedTopic && shuffle(filteredWords).map((word, index) => <FlipCard
                    key={word.word + index}
                    front={word.word}
                    back={word.translation}
                    direction={direction}/>
                )}

            </div>
        </div>

    );
}