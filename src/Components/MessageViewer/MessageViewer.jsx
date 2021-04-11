import React from 'react';
import { connect } from 'react-redux';

const MessageVeiwer = (props) => {
    return (
        <>
            <p>the length is :{props.messages.length}</p>
            <h1>{props.messages.map(e=>e.msgSubject)}</h1>
            <button clicked={props.onSendingANewMessage}>click here</button>
            <h1>{props.counter}</h1>
        </>

    );
};

const mapStateToProps = state => {
    return {
        messages: state.messages,
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onSendingANewMessage: () => dispatch({type:'NEWMESSAGE'})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MessageVeiwer);