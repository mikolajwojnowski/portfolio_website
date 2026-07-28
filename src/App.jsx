import './App.css'
import LiquidEther from './Components/LiquidEther.jsx';
import Navbar from './Components/Navbar';
import Tiles from './Components/Tiles';
import About from './Components/About';
import Tech from './Components/Tech'
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <>
      <div className="background-layer" aria-hidden="true">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={true}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={1}
        />
      </div>
      
      <Navbar></Navbar>
      <Tiles />
      <About/>
      <Tech />
      <Projects />
      <Footer />
   
     
    </>
  )
}

export default App
