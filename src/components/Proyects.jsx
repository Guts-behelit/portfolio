import style from '../style/proyects.module.css'

export default function Proyects({children}) {
  return (
    <div className={style.aboutContainer} id='proyectos'>
    <div className={style.aboutTitleContainer}>
    <h2 className={style.aboutTitle}>Proyectos</h2>
    </div>
    <div className={style.aboutSectionContainer}>
    {children}
    </div>
    

</div>
  )
}
