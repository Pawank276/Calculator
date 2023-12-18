import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert &&

        <div className="row d-flex justify-content-start">
            <div className={`col-3 alert alert-${props.alert.type}  position-absolute`} role="alert">
                <div className=''>
                    <strong className='fs-5'>{capitalize(props.alert.type)} : </strong>
                    <strong>{capitalize(props.alert.msg)}</strong>
                </div>
            </div>
        </div>
    )
}
