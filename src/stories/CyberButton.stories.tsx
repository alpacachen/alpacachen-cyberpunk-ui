import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberButton} from "../components/cyber-button";
import '../App.css'

export default {
    title: 'Example/cyber-button',
    component: CyberButton,
    argTypes: {
        // children: {control: 'text'},
        width: {control: 'text'},
    }
} as Meta

export const Template: Story<Parameters<typeof CyberButton>[0]> = ({children, ...rest}) => <CyberButton {...rest}>{children}</CyberButton>
Template.args = {
    children: 'submit333',
    width: '20px'
}
