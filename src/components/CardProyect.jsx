import style from '../style/cardProyect.module.css'


export const CardProyect = ({ image, urlWeb, stacks }) => {
  let stackList = [...stacks];
  return (
    <div className={style.cardProyect}>
      <div className={style.container}>
        <a href={urlWeb} target='blank'>
          <img src={image} alt="" />
        </a>
      </div>
      <div className={style.descriptionProyect}>
          <ul>
            {stackList.map((stack, index) => (
              <li key={index + '!$"#&('}><img src={stack.logo} alt="" />
                {stack.text}
              </li>
            ))}
          </ul>
        </div>
    </div>

  )
}