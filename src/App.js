import logo from './logo.svg';
import './App.css';
import trollface from './troll-face.png';
import MemeComponent from './MemeComponent';
function App() {
  return (
    <div className="App">
      <Header />
      <MemeComponent/>
    </div>
  );
}
function Header(){
  return (
    <header>
      <img src={trollface} />
      <h2>
        Meme generator
      </h2>
      <h4>React course-project 3</h4>
    </header>
  );
}
export default App;
