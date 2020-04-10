import React from 'react'
import { SelectTheme } from '../components/SelectTheme'
import { SelectLevel } from '../components/SelectLevel'

export class ConfigGame extends React.Component {
    state = {
        theme: ''        
    }

    handleClick = (theme) => {
        this.setState({ theme })
    }

    render() {        
        return this.state.theme === '' ? <SelectTheme handleClick={this.handleClick}/> : <SelectLevel theme={this.state.theme}/>        
    }
}