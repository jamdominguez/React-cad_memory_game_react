import React from 'react'
import { Link } from 'react-router-dom'

export class SelectLevel extends React.Component {
    render() {
        const { theme } = this.props        
        return (
            <div>
                <Link to={`/game/${theme}/2/3`} theme={this.props.theme}><h1> 2 x 3 </h1></Link>
                <Link to={`/game/${theme}/2/4`} theme={this.props.theme}><h1> 2 x 4 </h1></Link>
                <Link to={`/game/${theme}/3/4`} theme={this.props.theme}><h1> 3 x 4 </h1></Link>
            </div>
        )
    }
}