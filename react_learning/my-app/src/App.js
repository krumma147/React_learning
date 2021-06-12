import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Alert, Container, Row ,Col, Label, CardImg, Input, Button, CardText} from 'reactstrap'
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
                
                <Col xs = "9">
                    <Row style={{border:"2px solid black"}}>
                        <h4>Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
</h4>
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
                        <span style={{border:"2px solid black", height:"50px", padding:"10px"}}>Super thought out! I think clients would love this.</span>
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
                        
                    <Col xs = {{size:"6", offset:"1"}} >
                        <CardText>
                        Background image, hero, shapes, concept – beastly :-)
                        </CardText>
                    </Col>
                    
                    <Col xs="2">
                        <span class="material-icons" style={{fontSize:"50px"}}>thumb_down</span>
                        <span class="material-icons" style={{fontSize:"50px", marginLeft:"20px"}}>thumb_up</span>
                    </Col>
                </Row>
            </Row>

            <Row className="Comment-User" style={{marginTop:"20px"}} xs="12">
                <Input type="text" id="" name="" placeholder="My comment..." />
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