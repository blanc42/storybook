import {  Meta, StoryObj } from "@storybook/react";
import WeatherSite from "./WeatherSite";

const meta : Meta<typeof WeatherSite> = {
    title: "PAGES/WeatherSite",
    component: WeatherSite,
}

export default meta;

type Story = StoryObj<typeof WeatherSite>;

export const Primary: Story = {
    name : "WeatherSite"
  };