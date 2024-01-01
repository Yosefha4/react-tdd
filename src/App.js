import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm"

function App() {
  return (
    <div className="App">
      <h2> Welcome to my app</h2>
      <LoginForm submitFn={values => alert(JSON.stringify(values))}/>
    </div>
  );
}

export default App;
