import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberTextField} from "../components/cyber-text-field";

export default {
    title: 'Example/cyber-text-field',
    component: CyberTextField,
} as Meta

export const Template: Story<Parameters<typeof CyberTextField>[0]> = ({children, ...rest}) => <CyberTextField {...rest}></CyberTextField>
Template.args = {
    label: 'Enter your email address',
    fullWidth: true,
}
