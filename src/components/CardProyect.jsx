import style from '../style/cardProyect.module.css'


export const CardProyect = ({image,texto})=>{
    return(
        <div className={style.container}>
    <div className={style.modelContainer}>
        <span className={style.textCard}>{texto}</span>
        <div className={style.poligono}></div>
    <div className={style.capa}></div>
    </div>
    <img src={image} alt=""/>
</div>
    )
}