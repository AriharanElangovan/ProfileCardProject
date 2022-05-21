import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ariharan from './ariharan.jpg';
import gmail from './gmail.jpg';
import linkedin from './linkedin.png';
import twitter from './Twitter Icon.jpg';
import facebook from './Facebook Icon.jpg';
import insta from './Instagram Icon.jpg';
import github from './GitHub Icon.jpg';
function Top(){
  return (
      <header>
          <div className="imgReplacement">
            <img src={ariharan} />
          </div>
      </header>
  );
}
function About(){
  return (
      <section className="section1">
          <h1>Ariharan Elangovan</h1>
          <p>Full stack developer</p>
          <p>arielangovan.website</p>
          <div className="contactButtons">
              <button><img src={gmail}/>Email</button>
              <button><img src={linkedin}/>LinkedIn</button>
          </div>
      </section>
  );
}
function Description(){
  return (
      <section className="section2">
          <h2>About</h2>
          <p>I am a full stack developer with particular interest in making things easy and like to develop applications.I try to keep up with good practices and always eager to learn new things.</p>
          <h2>Interests</h2>
          <p>Cricketer,Reader,Tech fanatic</p>
      </section>
  );
}
function Footer(){
  return (
      <footer>
          <span>
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={insta}/>
            <img src={github}/>
          </span>
      </footer>
  );
}

function App() {
  return (
    <div>
        <Top/>
        <main>
            <About/>
            <Description/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
