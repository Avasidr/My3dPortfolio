import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-[#F6F7F9] dark:bg-[#040720]">
      <div className="bg-hero-pattern-light dark:bg-hero-pattern-dark 
      bg-cover bg-no-repeat bg-center bg-transparent-overlay">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App
