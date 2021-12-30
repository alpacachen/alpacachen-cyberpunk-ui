import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberMessageBox} from "../components/cyber-message-box";

export default {
    title: 'Example/cyber-message-box',
    component: CyberMessageBox,
    argTypes: {}
} as Meta

export const Template: Story<Parameters<typeof CyberMessageBox>[0]> = ({children, ...rest}) => <CyberMessageBox {...rest}>{children}</CyberMessageBox>
Template.args = {
    title: 'NIGHT CITY CHANGES EVERY BODY',
    children: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.'
}
