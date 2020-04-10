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
            <td key={key} className='td-cardPanel'>
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

renderTable = (customDeck, level) => {
    const tdWidth = (100 / level[1]) + '%'        
    return (                        
            <Table responsive>
                <thead>
                    <tr><th width={tdWidth}></th></tr>
                </thead>
                <tbody>
                    {this.getRowStructure(level)}
                </tbody>
            </Table>            
    )
}