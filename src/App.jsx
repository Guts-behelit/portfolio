
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Proyects from './components/Proyects'

import LogoSlider from './components/LogoSlider'
import CardProyectsContainer from './components/CardProyectsContainer'
function App() {


  return (
    <>
      <Header />
      <Front />
      <LogoSlider />
      <About>
        <AboutMe />
      </About>
      <Proyects>
        <CardProyectsContainer />
      </Proyects>
      <Footer/>
    </>
  )
}

export default App
