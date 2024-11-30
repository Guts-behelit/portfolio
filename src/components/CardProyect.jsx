import style from '../style/cardProyect.module.css'


export const CardProyect = ({image,urlWeb})=>{
    return(
        <div className={style.container}>
         <a href={urlWeb}>
         <img src={image} alt=""/>
         </a>
            
</div>
    )
}