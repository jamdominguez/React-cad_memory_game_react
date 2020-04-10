import React from 'react'
import CardsPanel from '../components/CardsPanel'

export class Game extends React.Component {
    render() {        
        return(
            <CardsPanel {...this.props}/>
        )
    }
}