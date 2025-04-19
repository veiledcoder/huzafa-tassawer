import { useState } from 'react'
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";
import { Services } from "./components/sections/Services";
import { WorkExperience } from "./components/sections/WorkExperience";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/sections/Footer";
import './App.css'

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
         className={`min-h-screen transition-opacity duration-700 ${
           isLoaded ? "opacity-100" : "opacity-0"
         } bg-grey text-black-100`}
       >

<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Home />
<Skills/>
<About />
<Services/>
<WorkExperience/>
<Projects/>
<Testimonials/>
<Contact/>
<Footer/>

        </div>

    </>
  )
}

export default App
