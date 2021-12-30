import {CSSProperties, FC} from "react";
import './index.scss'

export const CyberTitle:FC<{
    style?: CSSProperties
}> = (props) => {
    const { children, style } = props
    return <h2 style={style} className='cyber-title'>{children}</h2>
}
