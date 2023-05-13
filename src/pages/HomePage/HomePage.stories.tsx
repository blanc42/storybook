import {  Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";

const meta : Meta<typeof HomePage> = {
    title: "PAGES/HomePage",
    component: HomePage,
}

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Primary: Story = {
    name : "HomePage"
  };