import {FC, useMemo} from "react";
import './index.scss'

export const CyberDivider:FC<{
    color: 'yellow' | 'black',
    direction: 'top' | 'bottom'
}> = (props) => {
    const { color, direction } = props
    const str = useMemo(() => {
        if (color === 'yellow'){
            if(direction === 'top'){
                return 't-y'
            }else {
                return 'b-y'
            }
        }else {
            if(direction === 'top'){
                return 't-b'
            }else {
                return 'b-b'
            }
        }
    }, [direction, color])
    return <div className={`cyber-divider ${str}`}>
    </div>
}
