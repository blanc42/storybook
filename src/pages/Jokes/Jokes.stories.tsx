import {  Meta, StoryObj } from "@storybook/react";
import Jokes from "./Jokes";

const meta : Meta<typeof Jokes> = {
    title: "PAGES/Jokes",
    component: Jokes,
}

export default meta;

type Story = StoryObj<typeof Jokes>;

export const Primary: Story = {
    name : "Jokes"
  };