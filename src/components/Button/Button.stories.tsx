import type { Meta, StoryObj } from "@storybook/react";

import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import { PlusCircleFilled } from "@ant-design/icons";
import { light } from "../../styles/themes";
import { Button } from "./index";

const meta = {
  title: "Componentes/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: {
      control: "select",
      options: ["primary", "secondary", "info", "success", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "text"],
    },
    iconPosition: {
      control: "select",
      options: ["right", "left"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("Button");

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(button).toHaveFocus();

    expect(button).toHaveStyle(
      `background-color: ${light.colors.primary.main}`,
    );
  },
  args: {
    color: "primary",
    variant: "solid",
    label: "Button",
    fullWidth: false,
  },
};

export const PrimaryOutline: Story = {
  args: {
    color: "primary",
    variant: "outline",
    label: "Button",
  },
};

export const PrimaryText: Story = {
  args: {
    color: "primary",
    variant: "text",
    label: "Button",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    color: "primary",
    variant: "solid",
    label: "Button",
    icon: <PlusCircleFilled />,
    iconPosition: "left",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    color: "primary",
    variant: "solid",
    label: "Button",
    disabled: true,
  },
};
