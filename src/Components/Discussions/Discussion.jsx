import OnlineElementDiscussion from '../Online-list/Online-element/OnlineELementDiscussion'
import './Discussion.css'

export default function Discussion(){
    
    const onShowDisc=(e)=>{
        alert("cksjck")
    }
    
    return(
        <div className='discussion' onClick={onShowDisc}>
            <OnlineElementDiscussion imagicon={""}/>
            <div className='details'>
                <p className='details-name'>Tadjine Mazigh</p>
                    <p>Vous:Ok. 14.30</p>
                
            </div>
        </div>
    )
}