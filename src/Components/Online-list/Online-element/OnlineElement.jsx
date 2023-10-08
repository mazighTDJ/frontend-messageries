
import './OnlineElement.css'
import imageIcon from './IMG_1864.JPEG'

export default function OnlineElement(){

    return (
        <div className="online-element">
            <div className="bulle">
                <img  src={imageIcon} alt="bulle d'econ  de test" className="online-icon"/>
                <div className='online-icon-covered'>
                    <div className='online-icon-status'></div>
                </div>
            </div>
            <div className="name">
                <p>Tadjine mazigh</p>
            </div>
        </div>
    )
}