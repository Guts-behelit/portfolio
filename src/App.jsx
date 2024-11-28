
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import WolfByteInfo from './components/WolfByteInfo'
import AboutMe from './components/AboutMe'

function App() {
  

  return (
    <>
      <Header/>
      <Front/>
      <About>
<AboutMe/>
      </About>
      <Footer/>
    </>
  )
}

export default App
