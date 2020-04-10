import React from 'react'

const Card = (props) => {
    const { id, src, handleOnClickCard, name, } = props
    return (
        <div className='child'>
            <img id={id} width='100%' className='card' onClick={handleOnClickCard} src={src} alt={id} name={name} />
        </div>
    )
}
export default Card