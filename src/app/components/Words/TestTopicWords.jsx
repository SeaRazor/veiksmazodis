import commonStyles from '@/app/page.module.css'
import styles from "@/app/words/page.module.css";
import {useEffect, useRef, useState} from "react";
import {checkWordGracefully, getRandomWord, getWords} from "@/app/utils/words";
import {IconCheck, IconPlayerTrackNext, IconRefresh} from "@tabler/icons-react";
import WordCard from "@/app/UI/WordCard";
import {Progress} from "@/app/UI/Progress";
import FlipCard from "@/app/UI/FlipCard";
import {Modal} from "@/app/UI/ResultsDialog";


export function TestTopicWords({selectedTopic, direction}) {

    const [unAnsweredWords, setUnansweredWords] = useState([]);
    const [answeredWords, setAnsweredWords] = useState([]);
    const [currentWord, setCurrentWord] = useState({word: null, translation: null});
    const [results, setResults] = useState({correctNum: 0, incorrectNum: 0, warningNum: 0, totalNum: 0})
    const [checkInputClassName, setCheckInputClassName] = useState('');
    const [complete, setComplete] = useState(false);
    const [filteredWords, setFilteredWords] = useState([]);
    const [triesLeft, setTriesLeft] = useState(3);
    const inputRef = useRef(null);


    useEffect(() => {
        startTopicTest();
    }, [selectedTopic, direction]);

    useEffect(() => {
        if (unAnsweredWords.length > 0) {
            setNewWord();
        }
    }, [unAnsweredWords, direction]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCheckInputClassName('');
        }, 1000);
        return () => clearTimeout(timer);


    }, [currentWord]);

    function handleCheckButtonClick() {
        const enteredWord = inputRef.current.value;
        let checkedWord;
        const wordCheckResult = checkWordGracefully(enteredWord, currentWord, direction);


        checkedWord = {...currentWord, checkResult: wordCheckResult};
        setAnsweredWords(prevState => [checkedWord, ...prevState]);
        setFilteredWords(prevState => [checkedWord, ...prevState]);
        setUnansweredWords(prevState => prevState.filter(word => word.word !== checkedWord.word));
        let newResults;
        switch (wordCheckResult) {
            case 'correct':
                newResults = {...results, correctNum: results.correctNum + 1};
                setCheckInputClassName("correct_input");
                break;
            case 'incorrect':
                newResults = {...results, incorrectNum: results.incorrectNum + 1};
                setCheckInputClassName("incorrect_input");
                break;
            case 'warning':
                newResults = {...results, warningNum: results.warningNum + 1};
                setCheckInputClassName("warning_input");
                break;
        }
        /* if (isCorrect) {
             newResults = {...results, correctNum: results.correctNum + 1};
             setCheckInputClassName("correct_input")
         } else {
             newResults = {...results, incorrectNum: results.incorrectNum + 1};
             setCheckInputClassName("incorrect_input")
         }*/
        setResults(newResults);
        inputRef.current.value = '';
        if (newResults.totalNum === newResults.correctNum + newResults.incorrectNum + newResults.warningNum) {
            setComplete(true);
            setCurrentWord(null);
        } /*else {
            setNewWord();
        }*/
    }

    function startTopicTest() {
        const topicWords = getWords(selectedTopic);
        setUnansweredWords(topicWords);
        setAnsweredWords([]);
        setFilteredWords([]);
        setResults({correctNum: 0, incorrectNum: 0, warningNum: 0, totalNum: topicWords.length});
        setComplete(false);
        setTriesLeft(3);


    }

    function setNewWord() {
        const newWord = getRandomWord(unAnsweredWords);
        setCurrentWord(newWord);


    }


    function handleTestInput(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleCheckButtonClick();
        }
    }

    function setCloseDialog(tryAgain) {
        setComplete(false);
        if (tryAgain) {
            startTopicTest();
        }
    }

    function handleRefreshButtonClick() {
        setComplete(false);
        startTopicTest();
    }

    function handleNextButtonClick() {
        setNewWord();
        setTriesLeft(prevState => prevState - 1);
    }


    function handleFilterChange(filter) {
        if (filter === '') {
            setFilteredWords(answeredWords);
        } else {
            const filterCondition = filter;
            setFilteredWords(answeredWords.filter((word) => word.checkResult === filterCondition));
        }

    }

    return (
        <div className={commonStyles.column_flow}>

            {currentWord && <>
                <div className={commonStyles.input_flow}>
                    <WordCard word={direction === 'forward' ? currentWord.word : currentWord.translation}
                              comment={currentWord.comment}/>

                    <input className={`${commonStyles.test_input} ${commonStyles[checkInputClassName]}`} type="text"
                           id="testString" ref={inputRef}
                           onKeyUp={handleTestInput}
                           placeholder="Перевод"

                    />


                </div>
                <div className={commonStyles.buttons_container}>
                    <button onClick={handleCheckButtonClick} title="Проверить" className={commonStyles.default_button}>
                        <IconCheck size={20}/>
                        <span className={commonStyles.hidden_on_mobile}>Проверить</span>
                    </button>

                    <button onClick={handleNextButtonClick} title="Пропустить" className={commonStyles.third_button}
                            disabled={triesLeft === 0}>
                        <IconPlayerTrackNext size={20}/>
                        <span className={commonStyles.hidden_on_mobile}>Пропустить</span><span>({triesLeft})</span>
                    </button>
                    <button onClick={handleRefreshButtonClick} title="Заново" className={commonStyles.secondary_button}>
                        <IconRefresh size={20}/>
                        <span className={commonStyles.hidden_on_mobile}>Заново</span>
                    </button>
                </div>
            </>
            }


            <div className={commonStyles.results_info}>
                <div className={commonStyles.results_info_header}>Результаты</div>
                <div className={commonStyles.flow}>
                    <Progress correctNum={results.correctNum} incorrectNum={results.incorrectNum}
                              warningNum={results.warningNum}
                              total={results.totalNum} handleFilterBy={handleFilterChange}/>

                </div>
                <div className={styles.words_container}>

                    {filteredWords.map(word => {
                        return <FlipCard front={word.word} back={word.translation} direction={direction}
                                         checkResult={word.checkResult}/>
                    })}


                </div>
            </div>
            <Modal openModal={complete} topic={selectedTopic} closeModal={setCloseDialog}>
                <div className={styles.results_container}>


                    <div className={styles.result_line_container}>
                        <span>Всего слов:</span>
                        <span className={commonStyles.total_text}> {results.totalNum}</span>
                    </div>
                    <div className={styles.result_line_container}>
                        <span>Правильных ответов:</span>
                        <span className={commonStyles.correct_text}>{results.correctNum}</span>
                    </div>
                    <div className={styles.result_line_container}>
                        <span>Неправильных ответов:</span>
                        <span className={commonStyles.incorrect_text}> {results.incorrectNum}</span>
                    </div>
                    <div className={styles.result_line_container}>
                        <span>Почти правильных ответов:</span>
                        <span className={commonStyles.warning_text}> {results.warningNum}</span>
                    </div>
                </div>
            </Modal>

        </div>

    );

}
