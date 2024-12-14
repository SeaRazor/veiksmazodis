import styles from "@/app/page.module.css";
import {IconSearch} from "@tabler/icons-react";
import {useEffect, useRef} from "react";

export function SearchInput({searchHandler, currentValue, placeholder, searchOnType = false}) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value = currentValue;
    }, [currentValue]);

    function handleSearchInput(e) {
        if (searchOnType) {
            searchHandler(e.target.value);
        }
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchHandler(e.target.value);
        }
    }

    function handleSearchButtonClick() {
        const searchValue = inputRef.current.value;
        searchHandler(searchValue);

    }

    return (
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text"
                   id="searchString"
                   placeholder={placeholder}
                   onKeyUp={handleSearchInput}
                   ref={inputRef}

            />
            <button onClick={handleSearchButtonClick} title="Найти слово" className={styles.search_button}>
                <IconSearch size={19}/>

            </button>
        </div>
    );
}