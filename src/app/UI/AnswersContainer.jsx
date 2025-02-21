import FlipCard from "@/app/UI/FlipCard";
import styles from './ui.module.css'

export default function AnswersContainer({answers, resultType, direction}) {
    if (!answers || answers.length === 0) {
        return (
            <></>
        );
    }
    let resultClassName;
    switch (resultType) {
        case "correct":
            resultClassName = "correct_answer";
            break;
        case "incorrect":
            resultClassName = "incorrect_answer";
            break;
        case "warning":
            resultClassName = "warning_answer";
            break;
        default:
            resultClassName = "";
    }
    return (
        <div className={`${styles.answers_container} ${styles[resultClassName]}`}>
            {answers.map((answer, index) => (
                <FlipCard key={answer.word + index} front={answer.word} back={answer.translation} direction={direction}
                          checkResult={resultType}/>
            ))}
        </div>
    );
}