import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { HeroSection } from './Components/HeroSection';
import {Routes, Route} from 'react-router-dom';
import { About } from './Components/About';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/HeroSection" element={<HeroSection/>}/>
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
