import React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
    render() {
        return(
            <div>
                <Link to='/configgame' >
                    <button>Play</button>
                </Link>
            </div>
        )
    }
}