import React from 'react'

const Card = (props) => {
    const { id, src, handleOnClickCard, name } = props
    return (
        <div className='child'>
            <figure>
                <img id={id} className='detail-poster' onClick={handleOnClickCard} src={src} alt={id} name={name} />
            </figure>
        </div>
    )
}
export default Card