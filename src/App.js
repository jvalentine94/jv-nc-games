import './App.css';
import Nav from './components/Nav';
import Comments from './components/Comments';
import PostComment from './components/PostComment';
import Reviews from './components/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <body className="Homepage">
      <h1>JV NC Game Reviews
      <Nav />
      </h1>
      
      <Routes className="Pagebody">
        <Route path="/comments/:review_id" element ={<Comments/>}></Route> 
        <Route path="/category/:review_slug" element ={<Reviews/>}></Route>
        <Route path="/PostComment" element ={<PostComment/>}></Route>
      </Routes>
      
    </body>
  </BrowserRouter>
  );
}

export default App;