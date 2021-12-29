import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberButton} from "../components/cyber-button";

export default {
    title: 'Example/cyber-button',
    component: CyberButton,
    argTypes: {
        children: {
            control: 'text'
        }
    }
} as Meta

export const Template: Story<Parameters<typeof CyberButton>[0]> = (args) => <CyberButton>{args.children}</CyberButton>
Template.args = {children: 'submit'}
