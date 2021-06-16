
import './App.css';
import React, {Component} from 'react';
import { Container, Row ,Col, CardImg, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            user:{},
            status: false,
            modal: false,
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

        let data = [
            {
            author : "Minh",
            content : "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document." + 
            "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries."+
            "Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme."+
            "Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign."+
            "Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off",
            text:'',
            comment : [
                {
                    author : "User 1",
                    content : "Super thought out! I think clients would love this.",
                    like: false,
                    dislike: false,
                },
    
                {
                    author : "User 2",
                    content : "Background image, hero, shapes, concept – beastly :-)",
                    like: false,
                    dislike: false,
                }]
            },

            {
            author : "Long",
            content : "content",
            text:'',
            comment : [
                {
                    author : "User 3",
                    content : "Super thought out! I think clients would love this.",
                    like: false,
                    dislike: false,
                },
    
                {
                    author : "User 4",
                    content : "SBackground image, hero, shapes, concept – beastly :-)",
                    like: false,
                    dislike: false,
                },
            ],
        }
    ];
        
        this.setState({
            data,
            user,
        });
    }

    likeComment = (ev, i, index) => {
        let data = this.state.data;
        data[i].comment[index].like = !data[i].comment[index].like;
        this.setState({data});
        
    }

    disLikeComment = (ev, i, index) => {
        let data = this.state.data;
        data[i].comment[i].dislike = !data[i].comment[i].dislike;
        this.setState({data});
        // console.log(555555);
    }

    changeText = (ev, i) => {
        let data = this.state.data;
        data[i].text = ev.target.value;
        this.setState({data});
    }

    submitBtn = (ev, i) =>{
        let {data, user} = this.state;
        let obj = {
            author : user.name,
            content : data[i].text,
        }
        data[i].comment.push(obj);
        data[i].text = '';
        this.setState({
            data
        });
    }

    toggle = (ev, i) => {
        this.setState({modal: !this.state.modal});
        
    };

    render() {
        let {data, modal} = this.state;
        let arr = Object.values(data).map(key => key);
        //Post
        let userPost = arr.map((c, i) => {
            return(
                <Container >
                        <Row className="userPost" key={i} style={{backgroundColor:"aquamarine", marginTop:'40px'}}>
                            <Col xs="2" style={{paddingLeft:"30px"}}>
                                <CardImg src="" alt="" style={{border:"2px solid black", height:"100px", width:"100px"}} />
                                <h4>{c.author}</h4> 
                            </Col>
                                
                            <Col xs = "9" >
                                <Row style={{border:"2px solid black"}}>
                                    <h4>{c.content}</h4>
                                </Row>
                                {/* <Row style={{marginTop:"10px"}}>
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
                                </Row> */}
                            </Col>

                            <Col xs={1}>
                                <Button color="danger" onClick={(ev)=>this.toggle(ev, i)}>Edit</Button>
                            </Col>
                        </Row>

                        <div>
                            <Modal isOpen={modal} toggle={this.toggle}>
                                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                        <ModalBody>
                                            <Input type="textarea" className="inputPost" value={c.content} rows={5} />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter>
                            </Modal>
                        </div>
                        
                        
                        <Row className = "Comment-other" style={{marginTop:"20px",padding:"20px"}}>
                            <Row key={i} style={{marginTop:"10px", padding:"10px", backgroundColor:"lightgray"}}> 
                                {c.comment.map((cm, index)=> {
                                    return(
                                        <Row key={index}>
                                            <Col xs={2}>
                                                {cm.author}
                                            </Col>

                                            <Col xs={8}>
                                                {cm.content}
                                            </Col>

                                            <Col xs="1">
                                                <span class="material-icons" style={{fontSize:"50px", color : c.comment[index].like ? 'blue' : null, cursor:'pointer'}} onClick={ev => this.likeComment(ev, i, index)}>thumb_up</span>
                                                {/* <span class="material-icons" style={{fontSize:"50px", marginLeft:"20px", color : c.comment[i].dislike ? 'red' : null}} onClick={ev => this.disLikeComment(ev, i)}>thumb_down</span> */}
                                            </Col>

                                            <Col xs={1}>
                                                edit
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Row>
                        </Row>

                        <Row className="Comment-User" style={{marginTop:"20px"}} xs="12">
                            <Input type="text" placeholder="My comment..." value={c.text} onChange = {ev => this.changeText(ev, i)} />
                        </Row>
            
                        <Row className="Push-commentbtn" style={{marginTop:"20px", padding:"0 25vw"}}>
                            <Button variant="primary" onClick={(ev) => this.submitBtn(ev, i)}>
                                <span class="material-icons" style={{fontSize:"25px", padding:"0px"}}>add_circle_outline</span>Add comment
                            </Button>
                        </Row>

                </Container>
            )});
        
        return (
            <div>
                <Container style={{padding:"20px", border:"2px solid black"}}>
                
                {userPost}
                
                </Container>

            </div>
        )
    }
}

export default App;