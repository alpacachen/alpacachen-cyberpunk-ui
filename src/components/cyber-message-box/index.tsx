import {FC} from "react";
import {CyberTitle} from "../cyber-title";
import './index.scss'

export const CyberMessageBox:FC<{
    title: string
}> = (props) => {
    const { title, children } = props
    return <div className='cyber-message-box'>
        <CyberTitle style={{color: '#0e0e0e'}}>{title}</CyberTitle>
        <br />
        {children}
    </div>
}
