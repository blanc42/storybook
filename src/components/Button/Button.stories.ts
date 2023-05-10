import {  Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta : Meta<typeof Button> = {
    title: "FORM/Buttons/Button",
    component: Button,
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
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
  };


  Primary.storyName = "Normal Button"

  export const Secondary: Story = {
    args: {
      variant : "secondary"
    },
  };