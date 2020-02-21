import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

class CommentBox extends React.Component{
    render(){
        return(<Card className="text-left comment-box">
                 <Card.Header>Caja de comentarios</Card.Header>
                 <Card.Body>
                    <Form onSubmit={this.props.submit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre: </Form.Label>
                            <Form.Control type="text" name="name" placeholder="Nombre" value={this.props.name} onChange={ this.props.handler } required/>
                        </Form.Group>

                        <Form.Group controlId="formComment">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control as="textarea" name="comment" rows="3" value={this.props.comment} onChange={ this.props.handler } required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.props.submit}>
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
               </Card>)
    }
}

export default CommentBox