
import { useState } from 'react'
import style from '../style/header.module.css'
export default function Header() {
  const [position,setPosition] = useState(false)
  return (
    <header className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src="/img/roha-remove.png" alt="" />
        <span>Portfolio</span>
      </div>
      <button className={style.menu}
      onClick={()=>{
        setPosition(!position);
      }}
      >
        <i className="fa-solid fa-bars"></i>
        </button>
        <nav className={style.navContainer} style={{right:position?'0px':'-240px'}}>
            <ul className={style.listNavContainer}>
                <li>Inicio</li>
                <li><a href="#sobre-mi">Sobre Mi</a></li>
                <li><a href="#contactame">Contactame</a></li>
            </ul>
            <ul className={style.listRedesContainer}>
              <li>
                <a  target='_blank' href="https://github.com/Guts-behelit" className={style.github}>
                <i className={`fa-brands fa-github ${style.github}`}></i>
                </a>
               </li>
              
              
              <li>
              <a target='_blank' href="https://www.linkedin.com/in/joshua-pizarro-708b18339/" className={style.linkedin}>
              <i className={`fa-brands fa-linkedin ${style.linkedin}`}></i>
              </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
