import Header from './Components/Header/Header';
import './App.css';
import Form from './Components/Form/Form';
import MessageViewer from './Components/MessageViewer/MessageViewer';
import { useSelector } from 'react-redux';


function App() {
  const displayFormFromState = useSelector(state => { return state.displayForm })
  const displayMessagesFromState = useSelector(state => { return state.displayMessages })
  return (
    <div className="App">
      <Header></Header>
      {displayFormFromState && <Form></Form>}
      {displayMessagesFromState && <MessageViewer />}
    </div>
  );
}

export default App;
