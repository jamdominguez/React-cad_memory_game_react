import React from 'react'
import { Link } from 'react-router-dom'

import { getDeck, getCardsForPanel, getFooArray } from '../API'
import Card from './Card'

class CardsPanel extends React.Component {
    state = {
        reverse: {},
        cards: [],
        cardsFoundName: [],
        theme: '',
        level: [],
        unloked: [],
        errors: 0,
        found: 0,
        goal: 0,
        cardTouch1: null,
    }

    componentDidMount() {
        const { rows, cols , theme } = this.props.match.params
        const level = [parseInt(rows), parseInt(cols)]        
        const deck = getDeck(theme)
        const cardsForPanel = getCardsForPanel(deck.cards, level)
        this.setState({
            reverse: deck.reverse,
            cards: cardsForPanel,
            theme,
            level
        })
    }

    checkBH = (card) => {
        if (this.state.cardTouch1 === null) {
            ////console.log('assing touch1')
            this.setState({ cardTouch1: card })
        } else {
            if (this.state.cardTouch1.name !== card.name) {
                ////console.log('diferents')
                document.getElementsByTagName('body')[0].style.pointerEvents = 'none ' //desactivate events
                setTimeout(() => {
                    document.getElementById(this.state.cardTouch1.id).src = this.state.reverse.src
                    document.getElementById(card.id).src = this.state.reverse.src
                    this.setState({ cardTouch1: null })
                    document.getElementsByTagName('body')[0].style.pointerEvents = 'all ' //reactivate events
                }, 500)
            } else {
                ////console.log('equals')
                let cardsFoundName = this.state.cardsFoundName                
                cardsFoundName.push(card.name)
                this.setState({ cardTouch1: null, cardsFoundName })
            }

        }
    }

    cardWasFound = (name) => {
        ////console.log('foundNames', this.state.cardsFoundName)
        const found = this.state.cardsFoundName.indexOf(name) > -1
        ////console.log('found', found)
        return found
    }

    handleOnClickCard = (e) => {
        ////console.log(e.target)
        if (!this.cardWasFound(e.target.name)) {                  
            const id = e.target.id
            const card = this.getCardById(id)
            document.getElementById(id).src = card.src
            this.checkBH(card)
        }
        
    }

    getCardById = (id) => {
        return this.state.cards.find(card => card.id === id)
    }

    getRowStructure = (level) => {
        let rowIndex = 0
        return getFooArray(level[0]).map(() => {
            let key = `tr_${rowIndex}`
            return <tr key={key} id={key}>{this.getColStructure(level, rowIndex++ * level[1])}</tr>
        })
    }

    getColStructure = (level, accumulate) => {
        let colIndex = 0
        return getFooArray(level[1]).map(() => {
            ////////console.log('accumulate', accumulate, 'colIndex', colIndex)
            let index = accumulate + colIndex++
            const card = this.state.cards[index]
            ////////console.log('index', index)
            const key = `td_${card.id}`
            return (
                <td key={key}>
                    <Card
                        src={this.state.reverse.src}
                        alt={card.id}
                        handleOnClickCard={this.handleOnClickCard}
                        id={card.id}
                        name={card.name}
                    ></Card>
                </td>
            )
        })
    }

    reload = () => {
        this.componentDidMount()
    }

    renderTable = (customDeck, level) => {
        const tdWidth = (100 / level[1]) + '%'        
        return (
            <div>
                <table>
                    <thead>
                        <tr><th width={tdWidth}></th></tr>
                    </thead>
                    <tbody>
                        {this.getRowStructure(level)}
                    </tbody>
                </table>
                <Link to='/'><h1>Go Home</h1></Link>
                <Link to='/configgame'><h1>Go Config</h1></Link>
                <h1 onClick={this.reload}>Replay</h1>
            </div>
        )
    }

    render() {
        //console.log('state', this.state)
        if (this.state.cards.length > 0) {
            return (this.renderTable(this.state.cards, this.state.level))
        } else {
            return (
                <div>
                    No cards
                </div>
            )
        }

    }
}
CardsPanel.defaultProps = {
    theme: 'db',
    level: [4, 2],
    errors: 5
}
export default CardsPanel