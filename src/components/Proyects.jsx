import style from '../style/proyects.module.css'

export default function Proyects({children}) {
  return (
    <div className={style.proyectsContainerMain} id='proyectos'>
    <div className={style.proyectsTitleContainer}>
    <h2 className={style.proyectsTitle}>Proyectos</h2>
    </div>
    <div className={style.proyectsSectionContainer}>
    {children}
    </div>
    

</div>
  )
}
