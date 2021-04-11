import React from 'react';
import { connect } from 'react-redux';

const MessageVeiwer = (props) => {
    return (
        <>
            <p>the length is :{props.messages.length}</p>
            <h1>{props.messages.map(e=>e.msgSubject)}</h1>
        </>

    );
};

const mapStateToProps = state => {
    return {
        messages: state.messages,
    };
};
export default connect(mapStateToProps)(MessageVeiwer);