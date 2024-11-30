import style from '../style/cardProyectContainer.module.css'
import { CardProyect } from './CardProyect'
//se importa las imagenes en svg
import reactLogo from '../../public/svg/react-brands-solid.svg'
import htmlLogo from '../../public/svg/html5-brands-solid.svg'
import cssLogo from '../../public/svg/css-brands-solid.svg'
import javascriptLogo from '../../public/svg/js-brands-solid.svg'
import nodejsLogo from '../../public/svg/node-brands-solid.svg'
import pythonLogo from '../../public/svg/python-brands-solid.svg'
import electronLogo from '../../public/svg/electron-brands-solid.svg'
import fastapiLogo from '../../public/svg/fastapi-brands-solid.svg'

const listImages = [
    {url:'/img/youvideooficial.png',
      stack:[{logo:reactLogo,text:'React'},
        {logo:nodejsLogo,text:'nodejs'},
        {logo:pythonLogo,text:'python'}],
      urlWeb:'https://youvideo.vercel.app/'},
    {url:'/img/Wolfbyte.png',
      stack:[{logo:htmlLogo,text:'html'},
        {logo:nodejsLogo,text:'nodejs'},
        {logo:electronLogo,text:'electron'},
        {logo:cssLogo,text:'css'},
        {logo:javascriptLogo,text:'javascript'}
      ],
      urlWeb:'https://wolfbyte-browser.vercel.app/'},
      
    {url:'/img/fastmusic-api1.png',
      stack:[{logo:fastapiLogo,text:'fastapi'},{logo:pythonLogo,text:'python'}
      ],
      text:'wolfbyte'}
]

export default function CardProyectsContainer() {
  return (
  <div className={style.cardProyectContainer}>
  {listImages.map((card,index)=>(
    <CardProyect key={index + '%#$&'} image={card.url} urlWeb={card.urlWeb} stacks={card.stack}/>
  ))}
  </div>)
}
