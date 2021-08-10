import React,{Component} from 'react';
import { Button,Col,Row, Container,Form, FormGroup, Label, Input} from 'reactstrap';

class Post extends Component{
    doSTH1=()=>{
        console.log('edit')
    }

    doSTH2=()=>{
        console.log('delete')
    }

    render(){
        return (
            <Container>
                <Row xs="auto">
                    <Col xs="10">
                      {/* <p>{e.author}</p>     Test props ben duoi   */}
                      <h1>{this.props.obj.author}</h1>
                    </Col>

                    <Col xs="1">
                    {/* <Button color="primary" onClick={(ev)=>this.editPostBTN(ev, i)}>Edit</Button> */}
                      <span class="material-icons" onClick={this.props.edit}>edit</span>
                    </Col>

                    <Col xs="1">
                      {/* <Button color="danger" onClick={(ev)=>this.deletePostBTN(ev, i)}>Delete</Button> */}
                      <span class="material-icons" onClick={this.props.delete}>delete</span>
                    </Col>
                  </Row>
          
                  <Row>
                    <Col xs="11">
                        <p>{this.props.obj.content}</p>
                    </Col>
                    <Col xs="1"></Col>
                  </Row>
            </Container>
        );
    }
}

export default Post;