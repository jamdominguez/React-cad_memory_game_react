import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

export class SelectLevel extends React.Component {
    render() {
        const { theme } = this.props
        return (
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Link to={`/game/${theme}/2/4`} theme={this.props.theme}><Button>2 x 4</Button></Link>
                        <Link to={`/game/${theme}/3/4`} theme={this.props.theme}><Button>3 x 4</Button></Link>
                        <Link to={`/game/${theme}/4/4`} theme={this.props.theme}><Button>4 x 4</Button></Link>
                        <Link to={`/game/${theme}/4/5`} theme={this.props.theme}><Button>5 x 4</Button></Link>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}