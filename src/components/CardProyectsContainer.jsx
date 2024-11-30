import style from '../style/cardProyectContainer.module.css'
import { CardProyect } from './CardProyect'
const listImages = [
    {url:'/img/screen-capture.gif',text:'youVideo'},
    {url:'/img/screen-capture.gif',text:'wolfbyte'},
    {url:'/img/screen-capture2.gif',text:'wolfbyte'}
]

export default function CardProyectsContainer() {
  return (
  <div className={style.cardProyectContainer}>
  {listImages.map((card,index)=>(
    <CardProyect key={index + '%#$&'} image={card.url} texto={card.text}/>
  ))}
  </div>)
}
