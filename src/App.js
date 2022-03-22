import "./App.css";
import Nav from "./components/Nav";
import ReviewPage from "./components/ReviewPage";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState("Default_User");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userState, setUserState }}>
        <div className="Homepage">
          <h1>
            <strong>JV NC Game Reviews</strong>
            <br></br>
            <br></br>
            <Nav />
            <p id="LoginDetails">
              Logged In User: {userState}{" "}
              <button
                onClick={() => {
                  setUserState("");
                }}
              >
                logout
              </button>{" "}
            </p>
          </h1>

          <Routes className="Pagebody" id="pagebody">
            <Route path="/" element={<Home />}></Route>
            <Route path="/comments/:review_id" element={<ReviewPage />}></Route>
            <Route path="/category/:review_slug" element={<Reviews />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
