import {  Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta : Meta<typeof Button> = {
    title: "UICOMPONENTS/Button",
    component: Button,
    argTypes: {
        variant: {
          // options: ['primary', 'secondary'],
          control: { type: 'radio' },
        },
        borderRadius: {
            control: { type: 'number', min:1, max:16, step: 1 }
        }
      },
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
      variant : "primary"
    },
    name : "Normal Button"
  };

export const Secondary: Story = {
  args: {
    variant : "secondary"
  },
  name : "Red Button"
};

export const TailwindNormal: Story = {
  args: {
    variant : "border-2 bg-blue-400 rounded-md"
  },
  name : "Tailwind Button"
};