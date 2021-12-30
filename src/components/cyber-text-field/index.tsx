import {FC} from "react";
import TextField from '@bit/mui-org.material-ui.text-field'
import {StandardTextFieldProps} from "@bit/mui-org.material-ui.text-field/dist/TextField/TextField";

export const CyberTextField:FC<StandardTextFieldProps & {
    color: string
}> = (props) => {
    const { children, ...rest} = props
    return <TextField {...rest} />
}
