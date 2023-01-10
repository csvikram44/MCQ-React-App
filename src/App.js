import logo from './MCQ-Logo-512.png';
import './App.css';
import Register from './components/Register';
import List from './components/List';
import AddQuestion from './components/AddQuestion';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="Logo-name">MCQ - React App</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="Content">
        <div className="container">
          <Register />
          <List />
          <AddQuestion />
          <Question />
          <Result />
        </div>
      </section>
    </div>
  );
}

export default App;
