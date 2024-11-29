import style from '../style/cardProyectContainer.module.css'
import { CardProyect } from './CardProyect'
const listImages = [
    {url:'/img/card/garfield6.jpeg',text:'youbyte'},
    {url:'/img/card/garfield2.jpeg',text:'wolfbyte'},
    {url:'/img/card/garfield3.jpeg',text:'landing'}
]

export default function CardProyectsContainer() {
  return (
  <div className={style.cardProyectContainer}>
  {listImages.map((card,index)=>(
    <CardProyect key={index + '%#$&'} image={card.url} texto={card.text}/>
  ))}
  </div>)
}
