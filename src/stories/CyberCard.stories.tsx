import React from 'react';
import { Story, Meta } from '@storybook/react';
import {CyberCard} from "../components/cyber-card";

export default {
    title: 'Example/cyber-card',
    component: CyberCard,
    argTypes: {}
} as Meta

export const Template: Story<Parameters<typeof CyberCard>[0]> = ({children, ...rest}) => <CyberCard {...rest} />
Template.args = {
    width: '300px',
    fontSize: '12px',
    imgUrl: 'https://www.cyberpunk.net/build/images/home3/screen-image-mercenary-01@1x-ab977607.jpg',
    description: 'Use a variety of upgradeable weapons, hacking skills and body-enhancing implants to become the best hired gun in town.'
}
