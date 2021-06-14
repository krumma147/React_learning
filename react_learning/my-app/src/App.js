
import './App.css';
import React, {Component} from 'react';
import { Container, Row ,Col, CardImg, Input, Button} from 'reactstrap'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {},
            status: false,
            text: ''
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        let user = {
            id:"001",
            name:"Minh"
        }

        let data = {
            user : "Minh",
            content : "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document." + 
            "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries."+
            "Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme."+
            "Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign."+
            "Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off",
            comment : [
                {
                    user : "User 1",
                    content : "Super thought out! I think clients would love this.",
                    like: false,
                    dislike: false,
                },
    
                {
                    user : "User 2",
                    content : "SBackground image, hero, shapes, concept – beastly :-)",
                    like: false,
                    dislike: false,
                },
            ],
        }
        
        this.setState({
            data,
            user
        });
    }

    likeComment = (ev, i) => {
        let data = this.state.data;
        data.comment[i].like = !data.comment[i].like;
        this.setState({data});
        
    }

    disLikeComment = (ev, i) => {
        let data = this.state.data;
        data.comment[i].dislike = !data.comment[i].dislike;
        this.setState({data});
        // console.log(555555);
    }

    changeText = (ev) => {
        let text = ev.target.value;
        this.setState({text});
        console.log(text);
    }

    submitBtn = () =>{
        let {data, text} = this.state;
        let obj = {
            user : data.user,
            content : text,
        }
        data.comment.push(obj);
        this.setState({
            data,
            text: '',
        })
    }

    render() {
        let {data, text} = this.state;
        let arr = data.comment ? data.comment : [];
        const userName = data.user;
        let userPost =  data.content;
        let item = arr.map((c, i) => {
            return ( 
                <div className = "App" style={{padding:"20px"}}>
                    <Container className="appDemo Test" >
                        <Row className = "Comment-other" style={{border:"2px solid black", marginTop:"20px",padding:"20px"}}>
                            <Row key={i} style={{marginTop:"10px", padding:"10px"}}>
                                <Col xs = "1">
                                    <CardImg src="" alt="" style={{border:"2px solid black", height:"50px", width:"50px"}} />
                                    <h6>{c.user}</h6> 
                                </Col>
                                    
                                <Col xs = {{size:"6", offset:"1"}}>
                                    <span>{c.content}</span>
                                </Col>
                                
                                <Col xs="2">
                                    <span class="material-icons" style={{fontSize:"50px", color : c.like ? 'blue' : null}} onClick={ev => this.likeComment(ev, i)}>thumb_up</span>
                                    <span class="material-icons" style={{fontSize:"50px", marginLeft:"20px", color : c.dislike ? 'red' : null}} onClick={ev => this.disLikeComment(ev, i)}>thumb_down</span>
                                </Col>
                            </Row>
                        </Row>
            
                    </Container>
                </div> 
                    )
        });
        
        return (
            <div>
                <Container style={{padding:"20px", border:"2px solid black"}}>
                    <Row className="userPost">
                        <Col xs="2" style={{paddingLeft:"30px"}}>
                            <CardImg src="" alt="" style={{border:"2px solid black", height:"100px", width:"100px"}} />
                            <h4>{userName}</h4> 
                        </Col>
                            
                        <Col xs = "9" >
                            <Row style={{border:"2px solid black"}}>
                                <h4>{userPost}</h4>
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
                                    <span class="material-icons" style={{fontSize:"50px"}}>share</span>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                
                {item}
                
                    <Row className="Comment-User" style={{marginTop:"20px"}} xs="12">
                        <Input type="text" id="" name="" placeholder="My comment..." value={text} onChange = {ev => this.changeText(ev)} />
                    </Row>
            
                    <Row className="Push-commentbtn" style={{marginTop:"20px", padding:"0 25vw"}}>
                        <Button variant="primary" onClick={() => this.submitBtn()} style={{backgroundColor:"cyan", color:"black"}}>
                            <span class="material-icons" style={{fontSize:"25px", padding:"0px"}}>add_circle_outline</span>Add comment
                        </Button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;