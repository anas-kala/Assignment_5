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
    switch(action.type){
        case 'NEWMESSAGE': return{
            ...state,
            counter: state.counter + 1
        }
        default: return state;
    }
};
export default reducer;