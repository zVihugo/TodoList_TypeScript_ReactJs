import React from 'react'

// Css
import styles from './Modal.module.css'

interface Props{
        children: React.ReactNode
}

const Modal = ({children}: Props) => {
    
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.getElementById("Modal") // corrigido aqui
        if (modal) {
            modal.classList.add("hide")
        }
    }  
    
    return (
        <div id="Modal" className = "hide">
                <div className = {styles.fade} onClick={closeModal}>

                </div>
                <div className = {styles.modal}>
                        <h2>Texto modal</h2>
                        {children}
                </div>
        </div>
    )
}

export default Modal