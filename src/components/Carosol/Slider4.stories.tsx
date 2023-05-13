import {  Meta, StoryObj } from "@storybook/react";
import Slider4 from "./Slider4";

const meta : Meta<typeof Slider4> = {
    title: "UICOMPONENTS/Carosol",
    component: Slider4,
}

export default meta;

type Story = StoryObj<typeof Slider4>;

export const Primary: Story = {
    // args: {
    //   variant : "primary"
    // },
  };


Primary.storyName = "Simple Slider 4"
