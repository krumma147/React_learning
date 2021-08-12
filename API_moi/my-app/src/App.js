import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React,{Component, useState} from 'react';
import { Button,Col,Row, Container,Form, FormGroup, Label, Input} from 'reactstrap';
import Post from './testProps';

function App() {
    const api_post ='https://60ebfed7e9647b0017cddfbd.mockapi.io/post2';
    const api_cmt='https://60ebfed7e9647b0017cddfbd.mockapi.io/comments';

    const componentDidMount = () =>{
        getDataAPI();
        getCMTAPI();
    }

    const [data, setData] = useState([]);
    const [user, setUser] = useState('');
    const getDataAPI = () => {
      fetch(api_post)
          .then((response) => response.json())
          .then((get) => {
              console.log(get)
              setData(get);
              setUser('nobody')
          })
    }

    const [cmt, setCMT] = useState([]);
    const getCMTAPI = () => {
      fetch(api_cmt)
          .then((response) => response.json())
          .then((get) => {
              console.log(get)
              setCMT(get);
          })
    }

    const [postAuthor, setPostAuthor]= useState('');
    const changeAuthor = (e) => {
      let author = e.target.value;
      setPostAuthor(author);
      //console.log(this.state.postAuthor);
    }
    
    const [postContent, setPostContent]= useState('');
    const changeContent = (e) => {
      let content = e.target.value;
      setPostContent(content);
      //console.log(this.state.postContent);
    }

    //Edit Post btn put data to state
    const [IDPost,setIDPost] = useState('');
    const [editPost, seteditPost] = useState(false);
    const editPostBTN = (ev,i) =>{
      ev.preventDefault();
      setIDPost(data[i].id);
      setPostAuthor(data[i].author);
      setPostContent(data[i].content);
      seteditPost(true);
      let author = document.getElementById("author-post");
      let content = document.getElementById("content-post");
      author.value = data[i].author;
      content.value = data[i].content;
    }

    // add Post : method POST 
    const submitBTN = (e) => {
      e.preventDefault();
      console.log(`${postAuthor} ${postContent}`);
      if(editPost){
        //edit
        fetch(`${api_post}/${IDPost}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                author: postAuthor,
                content: postContent,
            })
        })
          .then((data)=>{
            getDataAPI();
            setData(data);
          })
      }else{
        //create
        fetch(api_post,{
          method: 'POST',
          body: JSON.stringify({
              author : postAuthor,
              content: postContent,
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then((data)=>{
          getDataAPI();
          setData(data);
          seteditPost(false);
        })
      }
      
    }

    // Delete Post
    const deletePostBTN = (ev, i) =>{
      ev.preventDefault();
      const id = data[i].id
      fetch(`${api_post}/${id}`, {
        method: 'DELETE',
      })
      .then((data)=>{
        getDataAPI();
        setData(data);
      })
    }

    const [cmtAuthor, setcmtAuthor] = useState('');
    const changecmtAuthor = (ev) =>{
      setcmtAuthor(ev.target.value);
      // console.log(this.state.cmtAuthor)
    }

    const [cmtContent, setcmtContent] = useState('');
    const changecmtContent = (ev) =>{
      setcmtContent(ev.target.value);
      // console.log(this.state.cmtContent)
    }

    //Edit btn put comments data to state
    const [changeCMT, setchangeCMT] = useState('');
    const [idCMT, setidCMT] = useState('');
    const [editCMT, seteditCMT] = useState(false);
    const editCMTBTN=(ev,index)=>{
      ev.preventDefault();
      let author = cmt[index].author; 
      let content = cmt[index].content;
      let id = cmt[index].id;
      setchangeCMT(cmt[index].content);
      setidCMT(cmt[index].id);
      seteditCMT(true);
      console.log(`${cmt[index].author} ${cmt[index].content} ${idCMT}`)
    }

    //create cmt content
    const createCMT = (e,i) => {
      e.preventDefault();
      // const cmt = this.state.cmt;const postContent = data[i].content;
      const postID = data[i].id;
      let newarr = data[i].comments;
      newarr = newarr.map(e=>e.toString());
      // console.log(newarr);
      // console.log(postID);
      if(this.state.setEditCMT){
        //edit
        fetch(`${api_cmt}/${idCMT}`,{
          method: 'PUT',
            body: JSON.stringify({
                // author : user name
                content: cmtContent,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
          .then((response) => response.json())
          .then(cmt=>{
            getCMTAPI();
            seteditCMT(false);
            setCMT(cmt);
            setchangeCMT('');
          })
          //create
      }else{
        fetch(api_cmt,{
          method: 'POST',
            body: JSON.stringify({
                author : cmtAuthor,// author : user name
                content: cmtContent,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
          .then((response) => response.json())
          .then(cmt=>{
            getCMTAPI();
            setCMT(cmt);
            setidCMT(cmt.id);
            setchangeCMT('');
            newarr.push(idCMT);
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
                getDataAPI();
                setData(data);
                setidCMT('');
              })
          })
      }
    }

    //Delete btn method : Delete

    const deleteCMTBTN=(ev,i,index)=>{
      ev.preventDefault();
      const cmtID = cmt[index].id;
      const postID = data[i].id;
      const newarr = data[i].comments.filter(e=>e!=cmtID);
      newarr = newarr.map(e=>e.toString());
      // console.log(newarr)
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
          getCMTAPI();
          setCMT(cmt);
        })
        )
    }

    const post = data.map((e, i)=>{
      return(
          <Container style={{backgroundColor:'#A9A9A9',borderRadius:'10px'}}>
              <Row key={i} style={{marginTop:"30px",padding:"20px"}}>

                <Post obj={e} edit={ev=>editPostBTN(ev,i)} delete={ev=>deletePostBTN(ev,i)} />

                <Row style={{marginTop:"20px", paddingTop:'20px',  borderTop:'1px solid black'}}>
                {cmt.map((c,index)=>{
                  if(e.comments.includes(c.id)){
                    return(
                      <Row key={index} style={{backgroundColor:"#FFE4E1", padding:"10px", margin:"10px 10px",borderRadius:'10px'}}>
                        <Row>
                          <Col xs="10">
                            {c.author}
                          </Col>

                          <Col xs="1">
                          <span class="material-icons" onClick={(ev)=> editCMTBTN(ev,index)}>edit</span>
                            {/* <Button color="primary" onClick={(ev)=> this.editCMTBTN(ev,index)}>Edit</Button> */}
                          </Col>

                          <Col xs="1">
                            {/* <Button color="danger" onClick={(ev)=>this.deleteCMTBTN(ev,i,index)}>Delete</Button> */}
                            <span class="material-icons" onClick={(ev)=>deleteCMTBTN(ev,i,index)}>delete</span>
                          </Col>
                        </Row>
                          
                        <Row>
                          <Col xs="11">
                            {c.content}
                          </Col>
                          <Col xs="1"></Col>
                        </Row>
                      </Row>
                        
                    )
                  }
                })}

                <Row key={i}>
                  <Col xs="4"></Col>
                  <Col xs="4">
                    <Input type="text" placeholder="author" onChange={(ev) => changecmtAuthor(ev)}/>
                    <Input type="text" placeholder="comments" defaultValue={changeCMT} onChange={(ev) => changecmtContent(ev)}/>
                    <Button onClick={e=>createCMT(e,i)} color="success">Add cmt</Button>
                  </Col>
                  <Col xs="4"></Col>
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
          <Input type="text" id="author-post" placeholder="author...." onChange={(e) => changeAuthor(e) } />
          <Label for="content-post" />Content
          <Input type="textarea" id="content-post" placeholder="content...." onChange={e => changeContent(e) }/>
          <Button color="primary" onClick={e=>submitBTN(e)}>Submit</Button>  
        </Form>
        {post}
      </div>
    )
  }

export default App;
