
import style from '../style/logoslider.module.css'
import cssImage from '../../public/svg/css-brands-solid.svg'
import gitImage from '../../public/svg/git-brands-solid.svg'
import githubImage from '../../public/svg/github-brands-solid.svg'
import htmlImage from '../../public/svg/html5-brands-solid.svg'
import jsImage from '../../public/svg/js-brands-solid.svg'
import nodeImage from '../../public/svg/node-brands-solid.svg'
import pythonImage from '../../public/svg/python-brands-solid.svg'
import npmImage from '../../public/svg/npm-brands-solid.svg'
import reactRouterImage from '../../public/svg/react-router-gray.svg'

let urlImages = [
cssImage,
gitImage,
githubImage,
htmlImage,
jsImage,
nodeImage,
npmImage,
pythonImage,
reactRouterImage
]
export default function LogoSlider() {
  return (
    <div className={style.logoSliderContainer}>
        <div className={style.logoSlider}>
        {urlImages.map((url,index)=>(
        <img  key={'image'+index} src={url} alt="" />
        ))}
        </div>
        <div className={style.logoSlider}>
        {urlImages.map((url,index)=>(
        <img  key={'image'+index} src={url} alt="" />
        ))}
        </div>
        
    </div>
  )
}
