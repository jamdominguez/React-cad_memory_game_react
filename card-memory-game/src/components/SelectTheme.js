import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class SelectTheme extends React.Component {
    handleTheme = (e) => {
        console.log(e.target.id)
        this.props.handleClick(e.target.id)
    }

    render() {
        console.log('props', this.props)
        return (
            <Container className='container-theme'>
                <Row>
                    <Col className='title-theme'><img width='50%' id='db' onClick={this.handleTheme} src='/themes/db.png' alt='Dragon Ball Z' /></Col>
                    <Col className='title-theme'><img width='50%' id='ft' onClick={this.handleTheme} src='/themes/ft.png' alt='Fariry Tail' /></Col>
                </Row>
                <Row>
                    <Col className='title-theme'><img width='50%' id='ss' onClick={this.handleTheme} src='/themes/ss.png' alt='Saint Saiya' /></Col>
                    <Col className='title-theme'><img width='50%' id='ns' onClick={this.handleTheme} src='/themes/ns.png' alt='Naruto' /></Col>
                </Row>
                <Row>
                    <Col className='title-theme'><img width='50%' id='op' onClick={this.handleTheme} src='/themes/op.png' alt='One Piece' /></Col>
                    <Col className='title-theme'><img width='50%' id='sds' onClick={this.handleTheme} src='/themes/sds.png' alt='Seven Deadly Sins' /></Col>
                </Row>
            </Container>
        )
    }
}