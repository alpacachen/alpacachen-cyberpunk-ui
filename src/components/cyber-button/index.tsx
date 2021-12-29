import {FC} from "react";
import './index.css'
import '../common.css'
import 'augmented-ui/augmented-ui.min.css'

export const CyberButton:FC<{
  // /**
  //  * asfassa
  //  */
  // test?: boolean
}> = (props) => {
  return <button className='cyber-button' data-augmented-ui="bl-clip" data-text={props.children} >
    {props.children}
    <div className='cyber-button-after animate'>{props.children}</div>
  </button>
}
