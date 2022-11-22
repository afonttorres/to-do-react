import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
import RegisterForm from './components/pure/forms/RegisterForm';
import LoginFormik from './components/pure/forms/LoginForm';

function App() {
  return (
    <div className="App">
      <TaskListComponent />
      {/* <RegisterForm />
        <LoginFormik /> */}
    </div>
  );
}

export default App;
