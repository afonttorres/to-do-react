import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
import RegisterForm from './components/pure/forms/RegisterForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent />
        <RegisterForm />
      </header>
    </div>
  );
}

export default App;
