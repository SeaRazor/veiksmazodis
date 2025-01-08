import commonStyles from '@/app/page.module.css'
import styles from "@/app/words/page.module.css";
import {useEffect, useRef, useState} from "react";
import {checkWord, getRandomWord, getWords} from "@/app/utils/words";
import {IconCheck, IconPlayerTrackNext, IconRefresh} from "@tabler/icons-react";
import WordCard from "@/app/UI/WordCard";
import {Progress} from "@/app/UI/Progress";
import FlipCard from "@/app/UI/FlipCard";
import {Modal} from "@/app/UI/ResultsDialog";


export function TestTopicWords({selectedTopic, direction}) {

    const [unAnsweredWords, setUnansweredWords] = useState([]);
    const [answeredWords, setAnsweredWords] = useState([]);
    const [currentWord, setCurrentWord] = useState({word: null, translation: null});
    const [results, setResults] = useState({correctNum: 0, incorrectNum: 0, totalNum: 0})
    const [checkInputClassName, setCheckInputClassName] = useState('');
    const [complete, setComplete] = useState(false);
    const [filteredWords, setFilteredWords] = useState([]);
    /*  const [hintsLeft, setHintsLeft] = useState(3);*/
    const inputRef = useRef(null);
    let totalWords;


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
        const isCorrect = checkWord(enteredWord, currentWord, direction);

        checkedWord = {...currentWord, checkResult: isCorrect};
        setAnsweredWords(prevState => [checkedWord, ...prevState]);
        setFilteredWords(prevState => [checkedWord, ...prevState]);
        setUnansweredWords(prevState => prevState.filter(word => word.word !== checkedWord.word));
        let newResults;
        if (isCorrect) {
            newResults = {...results, correctNum: results.correctNum + 1};
            setCheckInputClassName("correct_input")
        } else {
            newResults = {...results, incorrectNum: results.incorrectNum + 1};
            setCheckInputClassName("incorrect_input")
        }
        setResults(newResults);
        inputRef.current.value = '';
        if (newResults.totalNum === newResults.correctNum + newResults.incorrectNum) {
            setComplete(true);
            setCurrentWord(null);
        } else {
            setNewWord();
        }
    }

    function startTopicTest() {
        const topicWords = getWords(selectedTopic);
        setUnansweredWords(topicWords);
        setAnsweredWords([]);
        setFilteredWords([]);
        setResults({correctNum: 0, incorrectNum: 0, totalNum: topicWords.length});
        setComplete(false);


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
    }


    function handleFilterChange(filter) {
        if (filter === '') {
            setFilteredWords(answeredWords);
        } else {
            const filterCondition = filter === 'correct';
            setFilteredWords(answeredWords.filter((word) => word.checkResult === filterCondition));
        }

    }

    return (
        <div className={commonStyles.column_flow}>

            {currentWord && <div className={commonStyles.input_flow}>
                <WordCard word={direction === 'forward' ? currentWord.word : currentWord.translation}/>

                <input className={`${commonStyles.test_input} ${commonStyles[checkInputClassName]}`} type="text"
                       id="testString" ref={inputRef}
                       onKeyUp={handleTestInput}
                       placeholder="Перевод"

                />


                <button onClick={handleCheckButtonClick} title="Проверить" className={commonStyles.default_button}>
                    <IconCheck size={20}/>
                    <span className={commonStyles.hidden_on_mobile}>Проверить</span>
                </button>
                {/* <button onClick={handleHelpRequested} title="Помощь" className={commonStyles.help_button} disabled={hintsLeft === 0}>
                    <IconQuestionMark size={20}/>
                    <span>Подсказать(подсказок: {hintsLeft})</span>
                </button>*/}
                <button onClick={handleNextButtonClick} title="Пропустить" className={commonStyles.third_button}>
                    <IconPlayerTrackNext size={20}/>
                    <span className={commonStyles.hidden_on_mobile}>Пропустить</span>
                </button>
                <button onClick={handleRefreshButtonClick} title="Заново" className={commonStyles.secondary_button}>
                    <IconRefresh size={20}/>
                    <span className={commonStyles.hidden_on_mobile}>Заново</span>
                </button>


            </div>
            }


            <div className={commonStyles.results_info}>
                <div className={commonStyles.results_info_header}>Результаты</div>
                <div className={commonStyles.flow}>
                    <Progress correctNum={results.correctNum} incorrectNum={results.incorrectNum}
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
                </div>
            </Modal>

        </div>

    );

}
