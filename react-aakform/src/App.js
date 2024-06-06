import './App.css';

function App() {
  return (
    <div className="App">
        <div id='form'>
          <form>
            <div>
              <input type="text" name="user_type" placeholder='user_type'/>
              <input type="text" name="name" placeholder='Name'/>
              <input type="text" name="last_name" placeholder='LastName'/>
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder='password'/>
            </div>
            <button type="button">Submit</button>
          </form>
        </div>
       
    </div>
  );
}

export default App;
