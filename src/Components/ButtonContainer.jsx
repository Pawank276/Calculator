import React from 'react'
import styles from './ButtonContainer.module.css'
export default function ButtonContainer({ buttons, handleOnClick }) {

    return (
        <>
            {buttons.map((button) => (<button value={button} key={button} className="btn btn-primary back fs-3" onClick={handleOnClick}>{button}</button>))}
        </>
    )
}
