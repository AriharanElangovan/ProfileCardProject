import logo from './logo.svg';
import './App.css';
 import data from './Data';
 import Card from './Card'
function App() {
  var CardElements=prepareCardElements();
  return (
    <div className="App">
      <header>
        <h1>My travel journal</h1>
      </header>
      <main>
        {CardElements}
      </main>
    </div>
  );
}
function prepareCardElements(){
  return data.map(item=>{
    return (
      <Card 
      {...item}/>
    );
  });
}
export default App;
