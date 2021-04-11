import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';

const MessageVeiwer = () => {
    const dispatch=useDispatch();
    const msgSubject=useSelector(state=>{
        state.messages.map(e=>e.msgBody);
    });
    const counter=useSelector(state=>{
        return state.counter;
    });

    return (
        <>
            <p>the length is :{counter}</p>
            <h1>{msgSubject}</h1>
            <button onClick={()=>dispatch({ type: 'NEWMESSAGE'})}>click here</button>
            <h1>{counter}</h1>
        </>

    );
};


export default MessageVeiwer;