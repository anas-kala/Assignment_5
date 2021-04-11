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
    counter: 0
}

const reducer = (state = initState, action) => {
    if (action.type === 'NEWMESSAGE') {
        return {
            // messages: [...state.messages,m1,m1],

            // ...state, //copying the original state
            // todos: [...state.messages, action.payload] //new todos array 
            counter: state.counter + 1
        }
    }
    return state;
};
export default reducer;