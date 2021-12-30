import React, {FC} from "react";
import './index.scss'
import '../common.css'
import 'augmented-ui/augmented-ui.min.css'

export const CyberButton:FC<{
  width?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> = (props) => {
  console.log(props, 44)
  return <button onClick={props.onClick} className='cyber-button-container' data-augmented-ui="bl-clip" data-text={props.children} >
    <div className='cyber-button' style={{height: '100px', width: props.width}}>{props.children}</div>
    <div className='cyber-button-filter'/>
    <div className='cyber-button-after'>{props.children}</div>
  </button>
}
