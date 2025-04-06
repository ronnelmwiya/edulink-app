'useClient';

import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from './user-interface.module.css';

const Modal = ({ content }) => {
    const [ modalOpen, setModalOpen ] = useState(true);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div>
            {modalOpen ? (
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        {content}
                        <button className={styles.modalButton} onClick={toggleModal}><FaSignOutAlt />Exit</button>
                    </div>
                </div>
            ) : (
                ''
            )
            }
        </div>
    )
}

export default Modal;