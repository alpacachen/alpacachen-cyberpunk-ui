import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberDivider} from "../components/cyber-divider";

export default {
    title: 'Example/cyber-divider',
    component: CyberDivider,
    argTypes: {}
} as Meta

export const Template: Story<Parameters<typeof CyberDivider>[0]> = ({children, ...rest}) => <CyberDivider {...rest} />
Template.args = {}
