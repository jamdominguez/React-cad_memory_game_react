import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export class Home extends React.Component {
    render() {
        return (
            <Container className=''>
                <Link to='/configgame' >
                    <img className='home-image' src='/themes/start.png' alt='Play' />
                </Link>
                <h2>Touch to play</h2>
            </Container>
        )
    }
}