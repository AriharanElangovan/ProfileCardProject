import logo from './logo.svg';
import './App.css';
import airbnb from './airbnb.png';
import photogrid from './photogrid.png';
import Card from './Card.js';
import data from './Data'
function Header(){
  return (
    <header>
      <img src={airbnb}/>
    </header>
  );
}
function Section1(){
  return (
    <section className='section1'>
      <img src={photogrid}/>
    </section>
  );
}
const cardCompArray= data.map(
  item => {
    console.log(`item-${JSON.stringify(item)}`);
    return (
      <Card 
      title={item.title} 
      rating={(Math.round(item.rating * 100) / 100).toFixed(1)} 
      overall={item.overall} 
      location={item.location} 
      starimg={item.starimg} 
      imagesrc={item.imagesrc}
      amount={item.amount}
      spots={item.openSpots}/>
    )
  }
);
function Section2(){
  return (
    <section className='section2'>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      <div className='imageContainer'>
        {cardCompArray}
      </div>
    </section>
  );
}
function App() {
  return (
    <main>
      <Header/>
      <Section1/>
      <Section2/>
    </main>
  );
}

export default App;



