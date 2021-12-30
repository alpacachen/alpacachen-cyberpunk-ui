import React, {FC} from "react";
import './index.scss'
import '../common.css'
import 'augmented-ui/augmented-ui.min.css'

export const CyberButton:FC<{
  width?: string
  height?: string
  fontSize?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = (props) => {
  const { width, height, children, fontSize } = props
  return <button style={{fontSize}} onClick={props.onClick} className='cyber-button-container' data-augmented-ui="bl-clip" >
    <div className='cyber-button' style={{height, width}}>{children}</div>
    <div className='cyber-button-filter'/>
    <div className='cyber-button-after'>{children}</div>
  </button>
}
