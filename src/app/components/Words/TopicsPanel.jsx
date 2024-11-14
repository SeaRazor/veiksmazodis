import styles from "";

export function TopicsPanel({topics, selectedTopic, handleTopicSelection}) {
    return (
        <div className={styles.topics_container}>
            <ul className={styles.topics_list}>
                {topics.map((topic) => <li id={topic} key={topic}
                                           className={`${styles.topic_item} ${topic === selectedTopic ? styles.topic_item_active : ''} `}
                                           onClick={handleTopicSelection}>{topic}</li>)}
            </ul>
        </div>
    );
}