import React from 'react'

export class SelectTheme extends React.Component {
    handleTheme = (e) => {
        console.log(e.target.id)
        this.props.handleClick(e.target.id)
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <h1 id='db' onClick={this.handleTheme}> Dragon Ball </h1>
                <h1 id='ft' onClick={this.handleTheme}> Fariry Tail </h1>
            </div>
        )
    }
}