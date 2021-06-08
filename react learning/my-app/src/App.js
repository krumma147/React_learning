import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Alert, Container, Row ,Col, Label, CardImg, Input, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return ( 
    <div className = "App" style={{padding:"20px"}}>
        <Container className="appDemo Test" style={{padding:"20px", border:"2px solid black", padding:"20px"}}>
            <Row className="userPost">
                <Col xs="3">
                    <CardImg src="" alt="" style={{border:"2px solid black", height:"100px", width:"100px"}} />
                    <h4>Avatar</h4> 
                </Col>
                {/* <Col xs={{"size" : "2", offset:0}}> */}
                <Col xs = "9">
                    <Row>
                        <Input style={{border:"2px solid black", height:"200px",width:"50vw"}} type="text" id="" name="" placeholder="This is a post..." />
                    </Row>
                    <Row style={{marginTop:"10px"}}>
                        <Col xs = "4">
                            <span style={{fontSize:"30px", textDecoration:"underline", padding:"5px"}}>10</span>
                            <span class="material-icons" style={{fontSize:"50px"}}>thumb_up</span>
                        </Col>

                        <Col xs = "4">
                            <span style={{fontSize:"30px",textDecoration:"underline", padding:"5px"}}>10</span>
                            <span class="material-icons" style={{fontSize:"50px"}}>question_answer</span>
                        </Col>

                        <Col xs = "4">
                            <span style={{fontSize:"30px",textDecoration:"underline", padding:"5px"}}>10</span>
                            <span class="material-icons" style={{fontSize:"50px"}}>share</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className = "Comment-other" style={{border:"2px solid black", marginTop:"20px"}}>
                <Row style={{marginTop:"10px"}}>
                    <Col xs = "1">
                        <CardImg src="" alt="" style={{border:"2px solid black", height:"50px", width:"50px"}} />
                        <h6>Avatar</h6> 
                    </Col>
                        
                    <Col xs = {{size:"6", offset:"1"}}>
                        <span style={{border:"2px solid black", height:"50px"}}>Comment 1</span>
                    </Col>
                    
                    <Col xs="2">
                        <span class="material-icons" style={{fontSize:"50px"}}>thumb_down</span>
                        <span class="material-icons" style={{fontSize:"50px", marginLeft:"20px"}}>thumb_up</span>
                    </Col>
                </Row>

                <Row style={{marginTop:"10px"}}>
                    <Col xs = "1">
                        <CardImg src="" alt="" style={{border:"2px solid black", height:"50px", width:"50px"}} />
                        <h6>Avatar</h6> 
                    </Col>
                        
                    <Col xs = {{size:"6", offset:"1"}}>
                        <span style={{border:"2px solid black", height:"50px"}}>Comment 2</span>
                    </Col>
                    
                    <Col xs="2">
                        <span class="material-icons" style={{fontSize:"50px"}}>thumb_down</span>
                        <span class="material-icons" style={{fontSize:"50px", marginLeft:"20px"}}>thumb_up</span>
                    </Col>
                </Row>
            </Row>

            <Row className="Comment-User" style={{marginTop:"20px"}} xs="12">
                <span style={{border:"2px solid black", height:"50px"}}>My Comment </span>
            </Row>

            <Row className="Push-commentbtn" style={{marginTop:"20px", padding:"0 25vw"}}>
                <Button variant="primary" onClick={() => console.log("Primary")} style={{backgroundColor:"cyan", color:"black"}}>
                <span class="material-icons" style={{fontSize:"25px", padding:"0px"}}>add_circle_outline</span>Add comment
                </Button>
            </Row>

        </Container>
    </div> 
        );
}

export default App;