
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Proyects from './components/Proyects'
import CardsContainer from './components/CardContainer'
import { cardsData } from './data/ListImgs'
function App() {
  

  return (
    <>
      <Header/>
      <Front/>
      <About>
<AboutMe/>
      </About>
      <Proyects>
        <CardsContainer cardsData={cardsData}/>
      </Proyects>
      <Footer/>
    </>
  )
}

export default App
