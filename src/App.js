import './App.css';
import Nav from './components/Nav';
import Comments from './components/Comments';
import PostComment from './components/PostComment';
import Reviews from './components/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="Homepage">
      <h1>JV NC GAME REVIEWS</h1>
      <Nav />
      <Routes>
        <Route path="/comments/:review_id" element ={<Comments/>}></Route> 
        <Route path="/category/:review_slug" element ={<Reviews/>}></Route>
        <Route path="/PostComment" element ={<PostComment/>}></Route>
    
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;