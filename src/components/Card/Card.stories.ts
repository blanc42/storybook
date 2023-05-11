import {  Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta : Meta<typeof Card> = {
    title: "UIComponents/Card",
    component: Card,
    // argTypes: {
    //     variant: {
    //       options: ['primary', 'secondary'],
    //       control: { type: 'radio' },
    //     },
    //     borderRadius: {
    //         control: { type: 'number', min:1, max:16, step: 1 }
    //     }
    //   },
}

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    // args: {
    //   variant : "primary"
    // },
  };


Primary.storyName = "Simple Button"
