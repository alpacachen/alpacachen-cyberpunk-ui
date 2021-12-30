import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberTitle} from "../components/cyber-title";

export default {
    title: 'Example/cyber-title',
    component: CyberTitle,
    argTypes: {}
} as Meta

export const Template: Story<Parameters<typeof CyberTitle>[0]> = ({children, ...rest}) => <CyberTitle {...rest}>{children}</CyberTitle>
Template.args = {
    children: 'this is title',
}
