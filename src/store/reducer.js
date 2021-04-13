class Message {
    constructor(msgSubject, msgBody) {
        this.msgSubject = msgSubject;
        this.msgBody = msgBody;
        this.readMsg = false;
    }
}

let m0 = new Message("A", "B");
let m1 = new Message("C", "D");
let m2 = new Message("C", "D");

const initState = {
    messages: [m0, m1, m2],
    counter: 3,
    displayForm: true,
    displayMessages:false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'NEWMESSAGE': return {
            ...state,
            counter: state.messages.length,
        }
        case 'SUBMITFORM': return {
            ...state,
            messages: [...state.messages,new Message(action.sub, action.bod)]
        }
        case 'SETMESSAGEREAD': return{
            ...state, 
            messages: state.messages.map(
                (content, i) => i === action.ind ? {...content, readMsg: true}
                                        : content)
        }
        case 'SHOWFORM': return {
            ...state,
            displayForm: state.displayForm=true,
            displayMessages: state.displayMessages=false
        }
        case 'SHOWMESSAGES': return{
            ...state,
            displayForm: state.displayForm=false,
            displayMessages: state.displayMessages=true
        }
        default: return state;
    }
};
export default reducer;