import style from '../style/front.module.css'

export default function Front() {
  return (
    <div className={style.frontContainer}>
        <div className={style.frontTextContainer}>
            <div className = {style.frontTitleContainer}>
            <span className={style.name}>Frontend Developer</span>
                <h1> Joshua Pizarro</h1>
            </div>
            <div className={style.frontTextDescriptionContainer}>
            <p>En busqueda de la excelencia a travez de la <br />pasion por la programacion</p>
            </div>
            <div className={style.frontBtnContainer}>
                <button><a href="#proyectos">Echa un vistazo ↓</a></button>
            </div>
        </div>
        <div className={style.frontImageContainer}>
            <img src='/img/roha-remove.png'></img>
        </div>
    </div>
  )
}
