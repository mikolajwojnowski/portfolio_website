import Silk from '/Users/mikolajwojnowski/updated_website/my_website/src/blocks/Backgrounds/Silk/Silk.jsx';
import './App.css'
import LiquidEther from './Components/LiquidEther.jsx';
import Navbar from './Components/Navbar';
import Particles from './blocks/Backgrounds/Particles/Particles'
import Hero from './Components/Hero'
import Tiles from './Components/Tiles';
import About from './Components/About';
import Tech from './Components/Tech'

function App() {
  

  return (
    <>
    

<div className='liquid-ether-container {
'>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={40}
    cursorSize={200}
    isViscous={true}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={true}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={1}
    autoRampDuration={1}
  />
</div>
      {/* Background particles as a fixed layer behind all content
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0, // changed from -1 to 0
        pointerEvents: 'auto'
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div> */}
      
      <Navbar></Navbar>
      <Tiles />
      <About/>
      <Tech />
   
     
    </>
  )
}

export default App
