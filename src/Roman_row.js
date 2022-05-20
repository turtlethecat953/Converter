import React from 'react'

export default function RomanRow(props) {
    const {
        onChangeAmout,
        amount
    } = props
    return (
        <div>
            <h2 className='text'>Roman:</h2>
            <input type="text" className='input' value={amount} onChange={onChangeAmout} />
        </div>
    )
}
