import React from 'react'
import { Container } from 'react-bootstrap'
import CardsPanel from '../components/CardsPanel'
import ButtonPanel from '../components/ButtonPanel'

export class Game extends React.Component {
    reload = () => {
        this.componentDidMount()
    }

    render() {
        return (
            <Container>
                <Container className='parent' align='left'>
                    <CardsPanel className='parent' {...this.props} />
                </Container>
                <Container className='container-game-menu'>
                    <ButtonPanel reload={this.reload} />
                </Container>
            </Container>
        )
    }
}