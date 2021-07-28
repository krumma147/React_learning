import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React,{Component, useState} from 'react';
import { Button,Col,Row, Container,Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class App extends Component{
  constructor(props){
        super(props);
        this.state = {
            data: [],
            user: '',
            cmt:[],
            postAuthor: '',
            postContent: '',
            indexPost:'',
            api_post: 'https://60ebfed7e9647b0017cddfbd.mockapi.io/post2',
            api_cmt:'https://60ebfed7e9647b0017cddfbd.mockapi.io/comments',
            setEdit: false,
            setEditCMT: false,
            cmtAuthor: '',
            cmtContent: '',
            indexCMT:'',
            editCMT:'',
        }
    }

    componentDidMount(){
        this.getDataAPI();
        this.getCMTAPI();
    }

    getDataAPI() {
      let getListAPI = 'https://60ebfed7e9647b0017cddfbd.mockapi.io/post2';
      fetch(getListAPI)
          .then((response) => response.json())
          .then((get) => {
              console.log(get)
              this.setState({
                  data: get,
                  user:'nobody'
                })
          })
    }

    getCMTAPI(){
      let getCMTAPI = this.state.api_cmt;
      fetch(getCMTAPI)
          .then((response) => response.json())
          .then((get) => {
              console.log(get)
              this.setState({
                  cmt: get})
          })
    }

    changeAuthor(e){
      let author = e.target.value;
      this.setState({
        postAuthor:author,
      })
      //console.log(this.state.postAuthor);
    }

    changeContent(e){
      let content = e.target.value;
      this.setState({
        postContent:content,
      })
      //console.log(this.state.postContent);
    }

    // componentDidUpdate(){
    //   this.getDataAPI();
    //     this.getCMTAPI();
    // }

    // add Post : method POST  !need double check
    submitBTN = (e) => {
      e.preventDefault();
      let data = this.state.data;
      let author = this.state.postAuthor;
      let content = this.state.postContent;
      let id = this.state.indexPost;
      console.log(`${author} ${content}`);
      let api_post=this.state.api_post;
      if(this.state.setEdit){
        //edit
        fetch(`${api_post}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                author: author,
                content: content,
            })
        })
          .then((data)=>{
            this.getDataAPI();
            this.setState({data: data})
          })
      }else{
        //create
        fetch(api_post,{
          method: 'POST',
          body: JSON.stringify({
              author : author,
              content: content,
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then((data)=>{
          this.getDataAPI();
          this.setState({data: data, setEdit:false})
        })
      }
      
    }

    // Delete Post
    deletePostBTN = (ev, i) =>{
      ev.preventDefault();
      let api_post=this.state.api_post;
      let data = this.state.data;
      let id = data[i].id
      fetch(`${api_post}/${id}`, {
        method: 'DELETE',
      })
      .then((data)=>{
        this.getDataAPI();
        this.setState({data: data})
      })
    }

    //Edit Post btn put data to state

    editPostBTN=(ev,i)=>{
      ev.preventDefault();
      let data = this.state.data;
      this.setState({
        indexPost:data[i].id,
        postAuthor:data[i].author,
        postContent:data[i].content,
        setEdit:true,
      })
      let author = document.getElementById("author-post");
      let content = document.getElementById("content-post");
      author.value = data[i].author;
      content.value = data[i].content;
    }

    changecmtAuthor = (ev) =>{
      this.state.cmtAuthor = ev.target.value;
      // console.log(this.state.cmtAuthor)
    }

    changecmtContent = (ev) =>{
      this.state.cmtContent = ev.target.value;
      // console.log(this.state.cmtContent)
    }

    //create cmt content
    createCMT = (e,i) => {
      e.preventDefault();
      const author = this.state.cmtAuthor;
      const content = this.state.cmtContent;
      const api_cmt = this.state.api_cmt;
      const api_post = this.state.api_post;
      const cmt = this.state.cmt;
      const data = this.state.data;
      const id = this.state.indexCMT;
      const postID = data[i].id;
      const postContent = data[i].content;
      let newarr = data[i].comments;
      newarr = newarr.map(e=>e.toString());
      // console.log(newarr);
      // console.log(postID);
      if(this.state.setEditCMT){
        //edit
        fetch(`${api_cmt}/${id}`,{
          method: 'PUT',
            body: JSON.stringify({
                // author : user name
                content: content,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
          .then((response) => response.json())
          .then(cmt=>{
            this.getCMTAPI();
            this.setState({setEditCMT: false,cmt:cmt,editCMT:'',})
          })
          //create
      }else{
        fetch(api_cmt,{
          method: 'POST',
            body: JSON.stringify({
                author : author,// author : user name
                content: content,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
          .then((response) => response.json())
          .then(cmt=>{
            this.getCMTAPI();
            this.setState({cmt: cmt,indexCMT:cmt.id,})
            let newID = this.state.indexCMT;
            newarr.push(newID);
            // console.log(newarr);
            fetch(`${api_post}/${postID}`,{
              method: 'PUT',
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify({
                comments: newarr,
              })
            })

              .then(data=>{
                this.getDataAPI();
                this.setState({indexCMT:'',data: data});
              })
          })
      }
    }

    //Edit btn put comments data to state

    editCMTBTN=(ev,index)=>{
      ev.preventDefault();
      let data = this.state.cmt;
      let author = data[index].author; 
      let content = data[index].content;
      let id = data[index].id;
      this.setState({
        editCMT:data[index].content,
        indexCMT: data[index].id,
        setEditCMT: true,
      })
      console.log(`${data[index].author} ${data[index].content} ${this.state.indexCMT}`)
    }

    //Delete btn method : Delete

    deleteCMTBTN=(ev,i,index)=>{
      ev.preventDefault();
      let {data,cmt, api_cmt, api_post} = this.state;
      let cmtID = cmt[index].id;
      let postID = data[i].id;
      let newarr = data[i].comments.filter(e=>e!=cmtID);
      newarr = newarr.map(e=>e.toString());
      console.log(newarr)
      fetch(`${api_cmt}/${cmtID}`,{
        method: 'DELETE',
      })
        .then(
          fetch(`${api_post}/${postID}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              comments: newarr,
            })
        })
        .then(cmt=>{
          this.getCMTAPI();
          this.setState({cmt: cmt,})
        })
        )
    }

    render() {
      let {data,cmt} = this.state;
      let arrPOST = Object.values(data).map(key=>key);
      let arrCMT = Object.values(cmt).map(key=>key);
      let post = arrPOST.map((e, i)=>{
        return(
            <Container>
                <Row key={i} style={{marginTop:"30px",padding:"20px", backgroundColor:"#008B8B"}}>
                  <h1>Post {i+1}</h1>
                  <Col xs="auto">
                    <p>{e.author}</p>
                  </Col>
          
                  <Col xs="auto">
                    {e.content}
                  </Col>

                  <Col xs="2">
                    {/* <Button color="primary" onClick={(ev)=>this.editPostBTN(ev, i)}>Edit</Button> */}
                    <span class="material-icons" onClick={(ev)=>this.editPostBTN(ev, i)}>edit</span>
                  </Col>

                  <Col xs="2">
                    {/* <Button color="danger" onClick={(ev)=>this.deletePostBTN(ev, i)}>Delete</Button> */}
                    <span class="material-icons" onClick={(ev)=>this.deletePostBTN(ev, i)}>delete</span>
                  </Col>

                  <Row style={{marginTop:"40px"}}>
                  {arrCMT.map((c,index)=>{
                    if(e.comments.includes(c.id)){
                      return(
                        <Row key={index} style={{backgroundColor:"#FFE4E1", padding:"10px", margin:"10px 10px"}}>
                          <Col>
                            {c.author}
                          </Col>

                          <Col>
                            {c.content}
                          </Col>

                          <Col xs="2">
                            <Button color="primary" onClick={(ev)=> this.editCMTBTN(ev,index)}>Edit</Button>
                          </Col>

                          <Col xs="2">
                            <Button color="danger" onClick={(ev)=>this.deleteCMTBTN(ev,i,index)}>Delete</Button>
                          </Col>
                        </Row>
                      )
                    }
                  })}

                  <Row key={i} style={{margin:"0 25%", maxWidth:"600px"}}>
                    <Input type="text" placeholder="author" onChange={(ev) => this.changecmtAuthor(ev)}/>
                    <Input type="text" placeholder="comments" defaultValue={this.state.editCMT} onChange={(ev) => this.changecmtContent(ev)}/>
                    <Button onClick={e=>this.createCMT(e,i)} color="success">Add cmt</Button>
                  </Row>        
                </Row>
              </Row>

            </Container>
        )
      });

      return (
        <div>
          <h1>API 2 </h1>
          <Form style={{marginTop:"30px",padding:"50px", backgroundColor:"yellow"}}>
            <Label for="author-post" />Author 
            <Input type="text" id="author-post" placeholder="author...." onChange={(e) => this.changeAuthor(e) } />
            <Label for="content-post" />Content
            <Input type="textarea" id="content-post" placeholder="content...." onChange={e => this.changeContent(e) }/>
            <Button color="primary" onClick={e=>this.submitBTN(e)}>Submit</Button>  
          </Form>
          {post}
        </div>
      )
    }
}

export default App;
