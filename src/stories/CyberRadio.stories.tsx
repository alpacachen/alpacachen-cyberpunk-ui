import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberRadio} from "../components/cyber-radio";

export default {
    title: 'Example/cyber-radio',
    component: CyberRadio,
    argTypes: {}
} as Meta

export const Template: Story<Parameters<typeof CyberRadio>[0]> = ({children, ...rest}) => <CyberRadio {...rest} />
Template.args = {
    name: 'key',
    defaultValue: 'wallpapers',
    options: [
        {label: 'videos', value: 'videos'},
        {label: 'screenshots', value: 'screenshots'},
        {label: 'wallpapers', value: 'wallpapers'},
        {label: 'concept art', value: 'concept art'},
    ],
    onChange: (event) => {console.log(event.target.value)}
}
