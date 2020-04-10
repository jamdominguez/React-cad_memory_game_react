
import db from '../cards/db.json'
import ft from '../cards/ft.json'

const returnDataAccordingTheme = (theme) => {
    switch (theme.toLowerCase()) {
        case 'db':
            return db
        case 'ft':
            return ft            
        default:
            return []
    }
}

export const getDeck = (theme) => {
    return returnDataAccordingTheme(theme)    
}

export const selectInitCards = (cards, level) => {
    const customCards = []
    const differentCardsNeeded = (level[0] * level[1]) / 2    
    for (let i = 0; i < differentCardsNeeded; i++) {
        const index = parseInt(Math.random() * cards.length)
        const card = cards[index]
        customCards.push(card)
        customCards.push({ id: card.id+'_bh', src: card.src, name: card.name}) // the better half :)
        cards.splice(index, 1)
    }    
    return customCards
}

export const shuffleInitCards = (customCards) => {
    customCards.sort(() => Math.random() - 0.5);
}

export const getCardsForPanel = (cards, level) => {
    let customCards =selectInitCards(cards, level)
    shuffleInitCards(customCards)
    return customCards
}

export const getFooArray = (level) => {
    let foo = []
    let i = 0
    while (i < level) {
        foo.push(i)
        i++
    }
    return foo        
}