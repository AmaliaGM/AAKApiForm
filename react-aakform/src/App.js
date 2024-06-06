import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SignUpPage from './Sign Up/SignUpPage';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <div id='form'>
              <SignUpPage/>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
