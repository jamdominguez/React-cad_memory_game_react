import React from 'react'

import { getDeck, getCardsForPanel } from '../API'
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
        const { rows, cols, theme } = this.props.match.params
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
            this.setState({ cardTouch1: card })
        } else {
            if (this.state.cardTouch1.name !== card.name) {
                document.getElementsByTagName('body')[0].style.pointerEvents = 'none ' //desactivate events
                setTimeout(() => {
                    document.getElementById(this.state.cardTouch1.id).src = this.state.reverse.src
                    document.getElementById(card.id).src = this.state.reverse.src
                    this.setState({ cardTouch1: null })
                    document.getElementsByTagName('body')[0].style.pointerEvents = 'all ' //reactivate events
                }, 500)
            } else {
                let cardsFoundName = this.state.cardsFoundName
                cardsFoundName.push(card.name)
                this.setState({ cardTouch1: null, cardsFoundName })
            }

        }
    }

    cardWasFound = (name) => {
        const found = this.state.cardsFoundName.indexOf(name) > -1
        return found
    }

    handleOnClickCard = (e) => {
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

    renderPanel = () => {
        let i = 0
        return (
            this.state.cards.map(card => {
                return (
                    <Card key={i++}
                        src={this.state.reverse.src}
                        alt={card.id}
                        handleOnClickCard={this.handleOnClickCard}
                        id={card.id}
                        name={card.name}
                    ></Card>
                )
            })
        )
    }

    render() {
        if (this.state.cards.length > 0) {
            return (this.renderPanel())
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