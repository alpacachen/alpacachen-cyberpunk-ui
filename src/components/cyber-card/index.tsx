import {FC} from "react";
import './index.scss'
export const CyberCard:FC<{
    width?: string
    fontSize?: string
    imgUrl?: string
    description?: string
}> = (props) => {
    const { width, fontSize, imgUrl, description } = props
    return <div style={{width, fontSize}} className='cyber-card' data-augmented-ui="tr-clip bl-clip border">
        { imgUrl && <img className='img' src={imgUrl} alt=''/> }
        { description && <p className='text'>{description}</p> }
    </div>
}
