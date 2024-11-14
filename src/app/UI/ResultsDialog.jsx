import {useEffect, useRef} from "react";
import commonStyles from '@/app/page.module.css'

export function Modal({openModal, closeModal, children, topic}) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
        >
            <header>{topic}</header>
            {children}
            <div className={commonStyles.flow}>
                <button onClick={() => closeModal(false)} className={commonStyles.default_button}>
                    Закрыть
                </button>

                <button onClick={() => closeModal(true)} className={commonStyles.secondary_button}>
                    Попробовать снова
                </button>
            </div>

        </dialog>
    );
}

