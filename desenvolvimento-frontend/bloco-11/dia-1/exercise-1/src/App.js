import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  const compromissos = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJs']
  return (
    compromissos.map(value => task(value))
  );
}

export default App;
