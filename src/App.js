import './App.css';
import Nav from './components/Nav';
import Comments from './components/Comments';
import PostComment from './components/PostComment';
import Login from './components/Login';
import Reviews from './components/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {createContext, useState} from 'react';

export const UserContext = createContext();

function App() {
  
  const [userState,setUserState] = useState()

  return (
    <BrowserRouter>
    <UserContext.Provider value={{userState,setUserState}}>
    <body className="Homepage">
      <h1>JV NC Game Reviews
        <br></br>
        <br></br>
      <Nav />
      <p>Logged In User: {userState} <button onClick={()=>{setUserState('')}}>logout</button> </p>
      </h1>
      
      <Routes className="Pagebody">
        <Route path="/comments/:review_id" element ={<Comments/>}></Route> 
        <Route path="/category/:review_slug" element ={<Reviews/>}></Route>
        <Route path="/PostComment" element ={<PostComment/>}></Route>
        <Route path="/Login" element ={<Login/>}></Route>
      </Routes>
      
    </body>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;