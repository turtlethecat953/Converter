import React, { useState } from 'react'

export default function IntergetRow(props) {
    const {
      onChangeAmout,
      amount
    } = props
    return (
      <div>
          <h2 className='text'> Integer : </h2>
          <input type="number" className='input' value={amount} onChange={onChangeAmout}/>
      </div>
    )
}
