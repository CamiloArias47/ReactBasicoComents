import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'

class Comment extends React.Component{

    state = {
        img : ''
    }

    componentDidMount(){
        fetch(`https://source.unsplash.com/100x100/?user`).then((response)=> {   
            this.setState({img:response.url})
        }) 
    }

    render(){
        let {name, comment} = this.props.com 
        return(
            <Row>
                <Col xs={2}>
                    <Image src={ this.state.img } className="rounded img-fluid" />
                </Col>
                <Col xs={10}>
                    <h5>{ name }</h5>
                    <p>{ comment }</p>
                </Col>
            </Row>
        )
    }
}

export default Comment