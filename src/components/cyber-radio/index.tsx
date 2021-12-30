import {ChangeEventHandler, FC, useEffect, useState} from "react";
import './index.scss'

export const CyberRadio:FC<{
    name: string
    options?: Array<{label: string | number; value: string | number}>
    defaultValue?: string | number
    onChange?: ChangeEventHandler<HTMLInputElement>
}> = (props) => {
    const {name, options, defaultValue } = props
    const [curr, setCurr] = useState<string | number>()
    useEffect(() => {
        setCurr(props.defaultValue)
    }, [])
    const maxString = props.options?.reduce((prev, curr) => {
        const currStr = String(curr.label)
        if (currStr.length > prev.length){
            return currStr
        }
        return prev
    }, '')
    return <div data-augmented-ui="tr-clip bl-clip border" className='cyber-radio'>
        {
            (options ?? []).map(({label, value}) => <label className={`item ${curr === value ? 'active':''}`}>
                <input onChange={(e) => {setCurr(e.target.value);props.onChange?.(e)}} name={name} type='radio' defaultChecked={defaultValue === value} value={value} />
                <span className='content'>{label}</span>
                <span className='opacity-0 pointer-events-none'>{maxString}</span>
            </label>)
        }
    </div>
}
