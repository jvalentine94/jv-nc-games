import { useState, useContext } from 'react';

import { UserContext } from '../App';

const Login = () => {
    
    const {userState,setUserState} = useContext(UserContext)

    const [userEntry, setUserEntry] = useState('');

    const [passwordEntry, setPasswordEntry] = useState('');

    const users = {'joe':'1',
                'dave':'2',
                'helen':'3'}

    const handleSubmit = async (event) => {


        event.preventDefault()

        console.log(userEntry,passwordEntry)

        if (users[`${userEntry}`]===passwordEntry){
        setUserState(userEntry)
        console.log(userState)
        setUserEntry('')
        setPasswordEntry('')
        } else {
        setUserEntry('Incorrect login details')
        setPasswordEntry('Incorrect login details')
    }
       
    }

    return (
        <main>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Logged in User: {`${userState}`}</p>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <label>Username</label>
                <input placeholder='Enter Username Here' type='text' value={userEntry} onChange={(event)=>{setUserEntry(event.target.value)}}></input>
                <input placeholder='Enter Password Here' value={passwordEntry} onChange={(event)=>{setPasswordEntry(event.target.value)}}></input>
                <button>Enter</button>
            </form>
        </main>
    )
}

export default Login;