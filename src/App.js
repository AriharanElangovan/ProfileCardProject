import logo from './logo.svg';
import './App.css';
import airbnb from './airbnb.png';
import photogrid from './photogrid.png';
import katie from './katie.png';
import wedding from './wedding.png';
import bike from './bike.png';
import star from './star.png';
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
function Section2(){
  return (
    <section className='section2'>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      <div className='imageContainer'>
        <div>
          <img src={katie}/>
          <p className='ratingSection'>
            <img className='starImg' src={star}/>
            <span>5.0 </span>
            <span>(6)-USA</span>
          </p>
          <p className='firstLine'>
            Life lessons with Katie Zaferes
          </p>
          <p className='secondLine'>
            <span>From $136 </span><span>/ person</span>
          </p>
        </div>
        <div>
          <img src={wedding}/>
          <p className='ratingSection'>
            <img className='starImg' src={star}/>
            <span>5.0 </span>
            <span>(30)-USA</span>
          </p>
          <p className='firstLine'>
            Learn wedding photography
          </p>
          <p className='secondLine'>
            <span>From $125 </span><span>/ person</span>
          </p>
        </div>
        <div>
          <img src={bike}/>
          <p className='ratingSection'>
            <img className='starImg' src={star}/>
            <span>5.0 </span>
            <span>(30)-USA</span>
          </p>
          <p className='firstLine'>
            Group Mountain Biking          
          </p>
          <p className='secondLine'>
            <span>From $50 </span><span>/ person</span>
          </p>
        </div>
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
