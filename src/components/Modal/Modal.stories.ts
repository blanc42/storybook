import {  Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta : Meta<typeof Modal> = {
    title: "UIComponents/Modal",
    component: Modal,
}

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    // args: {
    //   variant : "primary"
    // },
  };


Primary.storyName = "Simple Modal"
