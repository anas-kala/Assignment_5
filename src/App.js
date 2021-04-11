import Header from './Components/Header/Header';
import './App.css';
import Form from './Components/Form/Form';
import MessageViewer from './Components/MessageViewer/MessageViewer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <MessageViewer />
    </div>
  );
}

export default App;
