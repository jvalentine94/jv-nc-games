import { useState, useContext } from "react";

import { UserContext } from "../App";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  const { userState, setUserState } = useContext(UserContext);

  const [userEntry, setUserEntry] = useState("");

  const [passwordEntry, setPasswordEntry] = useState("");

  const [loginError, setLoginError] = useState("");

  const users = { joe: "1", dave: "2", helen: "3", jessjelly: "4" };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (users[`${userEntry}`] === passwordEntry) {
      setUserState(userEntry);
      setUserEntry("");
      setPasswordEntry("");
    } else {
      setLoginError("Incorrect login details");
    }
  };

  return (
    <main className="LoginPage">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Logged in User: {`${userState}`}</p>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>Username</label>
        <input
          placeholder="Enter Username Here"
          type="text"
          value={userEntry}
          onChange={(event) => {
            setUserEntry(event.target.value);
          }}
        ></input>
        <input
          placeholder="Enter Password Here"
          value={passwordEntry}
          onChange={(event) => {
            setPasswordEntry(event.target.value);
          }}
        ></input>
        <button>Enter</button>
        <br></br>
        <br></br>
        <ErrorMessage message={loginError}></ErrorMessage>
      </form>
    </main>
  );
};

export default Login;
