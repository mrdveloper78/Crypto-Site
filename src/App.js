import logo from './logo.svg';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './Components/Header';
import MobileNav from './Components/MobileNav';
import Hero from './Components/Hero';
import States from './Components/States';
import Why from './Components/Why';
import Calculate from './Components/Calculate';
import Trade from './Components/Trade';
import Features from './Components/Features';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';


function App() {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Header/>
      <MobileNav/>
      <Hero/>
      <States/>
      <Why/>
      <Calculate/>
      <Trade/>
      <Features/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
