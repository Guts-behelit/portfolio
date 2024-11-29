import '../style/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>Pensamiento del dia</h3>
        <p>La tecnología es el lienzo donde podemos pintar nuestras ideas.
           Programar es más que escribir código; es disfrutar el proceso y 
           crear soluciones que cambian el mundo. <em>Joshua developer</em> </p>
      </div>
      
      <div className="footer-links">
        <h3>Links de Ayuda</h3>
        <ul>
          <li><a href="#">Politica de Privacidad</a></li>
          <li><a href="#">Termino de Servicios</a></li>
          <li><a href="#">Soporte</a></li>
        </ul>
      </div>
      
      <div className="footer-contact" id='contactame'>
        <h3>Contactame</h3>
        <p>Email: joshuadeveloper12@gmail.com</p>
        
      </div>
      
      <div className="footer-social">
        <h3>Sigueme</h3>
        <ul>
          
          
          <li>
          <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/joshua-pizarro-708b18339/">Linkedin</a>
            </li>
            
          <li>
          <i className="fa-brands fa-square-github"></i>
            <a href="https://github.com/Guts-behelit">Github</a>
            </li>
            
            
        </ul>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>&copy; 2024 Your Website. All Rights Reserved.</p>
    </div>
    <div className='footer-bottom footer-imagen'>
      <img src="/img/lobo-durmiendo.png" alt="" />
      <span>Eso es Todo</span>
    </div>
  </footer>
  
  )
}
