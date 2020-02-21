import React from 'react';
import './App.css';
import Header from './components/header'
import CommentBox from './components/comentBox'
import Display from './components/displayComents'
import {Container, Row, Col} from 'react-bootstrap'


class App extends React.Component {
  
  state = {
    coments:[],
    name:'',
    comment:''
  };

  handlerInputs = event => {
    this.setState({ [event.target.name]:event.target.value} );
  }

  handlerSubmit = e => {
    let comments = this.state.coments

    comments.push({
      name:this.state.name,
      comment: this.state.comment
    })

    this.setState({
      coments: comments,
      name : '',
      comment : ''
    })  

    e.preventDefault()
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Container className="mt-2">
          <Row>
            <Col xs={12} sm={4}>
              <CommentBox handler={ this.handlerInputs.bind(this) } 
                          submit={ this.handlerSubmit.bind(this) }
                          name={ this.state.name }
                          comment = { this.state.comment }
              />
            </Col>
            <Col xs={12} sm={8}>
              <Display comments={ this.state.coments }/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
