import {FC} from "react";
import './index.scss'

export const CyberTitle:FC<{
}> = (props) => {
    const { children } = props
    return <h2 className='cyber-title'>{children}</h2>
}
