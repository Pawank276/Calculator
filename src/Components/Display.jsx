import React, { useState } from 'react'
import ButtonContainer from './ButtonContainer'
import styles from './Display.module.css'

export default function Display() {
    let [displayVal, setDisplayVal] = useState("")
    let buttons = ['B', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', 'C', '.', '=']
    const handleOnClick = (e) => {
        let value = e.target.value;
        if (value === "C") {
            setDisplayVal("")
        }
        else if (value === "B") {
            let backValue = displayVal.substring(0, displayVal.length - 1);
            setDisplayVal(backValue)
        }
        else if (value === "=") {
            let calculation = eval(displayVal)
            setDisplayVal(calculation)
        } else {
            setDisplayVal(displayVal += value)
        }
    }
    return (
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-5">
                <div className={`${styles.screen} d-flex align-items-end justify-content-end`}>
                    <h2 className="text-white text-end fw-bold">{displayVal}</h2>
                </div>
                <div className={`${styles.btnContainer} bg-primary`}>
                    <ButtonContainer buttons={buttons} handleOnClick={handleOnClick} />

                </div>
            </div>
        </div>
    )
}
