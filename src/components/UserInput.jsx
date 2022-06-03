import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';

const UserInput = () => {

    const [userName, setUserName] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () =>{
        
        dispatch(changeUser(userName));
        navigate("/pokedex")
    }

    return (
        <div className='userInput'>
            <img src="https://www.pngmart.com/files/12/Ash-Ketchum-Transparent-Background.png" alt=""/>
            <div className='userInputDetail'>
                <h2>Hello trainer!!!</h2>
                <div>
                    <b>Give me your</b> <button onClick={getName}>Enviar</button><b>name to start!</b>
                </div>
                <input placeholder='Type ypur Name here' type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
            </div>
            
        </div>
    );
};

export default UserInput;