import style from '../style/cardProyectContainer.module.css'
import { CardProyect } from './CardProyect'
//se importa las imagenes en svg
import youvideo from '../../public/svg/YouVideo500.svg'
const listImages = [
    {url:'/img/youvideooficial.png',urlWeb:'https://youvideo.vercel.app/'},
    {url:'/img/Wolfbyte.png',urlWeb:'https://wolfbyte-browser.vercel.app/'},
    {url:'/img/fastmusic-api1.png',text:'wolfbyte'}
]

export default function CardProyectsContainer() {
  return (
  <div className={style.cardProyectContainer}>
  {listImages.map((card,index)=>(
    <CardProyect key={index + '%#$&'} image={card.url} urlWeb={card.urlWeb}/>
  ))}
  </div>)
}
