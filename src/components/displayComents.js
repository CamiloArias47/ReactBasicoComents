import React from 'react'
import Comment from './comment'
import { Card } from 'react-bootstrap'

class DisplayBox extends React.Component{
    render(){
        return(<Card className="text-left comment-box">
                <Card.Header>comentarios {this.props.comments.length} </Card.Header>
                    <Card.Body>
                        { this.props.comments.map( (comment, index) => <Comment com={comment} key={index}/>) }
                    </Card.Body>
               </Card>)
    }
}

export default DisplayBox;