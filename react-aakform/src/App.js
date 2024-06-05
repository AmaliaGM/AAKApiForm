import './App.css';

function App() {
  return (
    <div className="App">
        <div id='form'>
          <form>
            <input type="text" name="name" placeholder='Name'/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name='message' placeholder='Write Message here' />
            <button type="button">Submit</button>
          </form>
        </div>
       
    </div>
  );
}

export default App;
