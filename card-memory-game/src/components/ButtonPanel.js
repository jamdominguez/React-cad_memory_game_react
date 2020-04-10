import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { IoMdSettings, IoMdHome, IoMdRefreshCircle } from 'react-icons/io'


const ButtonPanel = (props) => {
    const reload = () => {
        window.location.reload()
    }
    console.log('props', props)
    return (
        <Container>
            <Link to='/'><IoMdHome className='option-game' /></Link>
            <Link to='/configgame'><IoMdSettings className='option-game' /></Link>
            <IoMdRefreshCircle className='option-game' onClick={reload} />
        </Container>
    )
}
export default ButtonPanel