import {FC, useMemo} from "react";
import './index.scss'
import TopBlack from '../assets/top-black.svg'
import BottomBlack from '../assets/bottom-black.svg'
import BottomYellow from '../assets/bottom-yellow.svg'
import TopYellow from '../assets/top-yellow.svg'

export const CyberDivider:FC<{
    color: 'yellow' | 'black',
    direction: 'top' | 'bottom'
}> = (props) => {
    const { color, direction } = props
    const src = useMemo(() => {
        if (color === 'yellow'){
            if(direction === 'top'){
                return TopYellow
            }else {
                return BottomYellow
            }
        }else {
            if(direction === 'top'){
                return TopBlack
            }else {
                return BottomBlack
            }
        }
    }, [direction, color])
    return <div className='cyber-divider' style={{fontSize: 0}}>
        <img style={{width: '100%'}} src={src} alt=''/>
    </div>
}
