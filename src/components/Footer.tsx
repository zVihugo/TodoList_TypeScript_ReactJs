import React from 'react'

import styles from './Footer.module.css'

const footer = () => {
  return (
    <div className = {styles.footer}>
        <footer>
            <p>
                <span>React + TS Todo</span> @2023
            </p>
        </footer>
    </div>
  )
}

export default footer