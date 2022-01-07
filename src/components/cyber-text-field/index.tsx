import {FC} from "react";
import TextField from '@bit/mui-org.material-ui.text-field'
import { withStyles } from '@bit/mui-org.material-ui.styles'
import {StandardTextFieldProps} from "@bit/mui-org.material-ui.text-field/dist/TextField/TextField";

const CssTextField = withStyles({
    root: {
        '& .MuiFormLabel-root': {
            fontFamily: 'BlenderProBook,sans-serif'
        },
        '& .MuiInputBase-input': {
            fontFamily: 'BlenderProBook,sans-serif',
            caretColor: '#9c9503',
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
    },
})(TextField);

export const CyberTextField:FC<StandardTextFieldProps> = (props) => {
    const { children, ...rest} = props
    return <CssTextField {...rest}/>
}
