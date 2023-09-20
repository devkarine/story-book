// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { LoginForm } from "./index";

const meta: Meta<typeof LoginForm> = {
  title: "Componentes/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("Login");

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const successMessage = canvas.queryByText(
      "Tudo certo. Sua conta está pronta e provavelmente devemos te logar.",
    );

    const ErrorMessage = canvas.queryByText(
      "E-mail já utilizado, tente outro!",
    );

    expect(successMessage).not.toBeInTheDocument();
    expect(ErrorMessage).not.toBeInTheDocument();
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@test.com");

    await userEvent.type(canvas.getByTestId("password"), "a-random-password");

    await userEvent.click(canvas.getByRole("button"));

    const successMessage = canvas.getByText(
      "Tudo certo. Sua conta está pronta e provavelmente devemos te logar.",
    );

    const ErrorMessage = canvas.queryByText(
      "E-mail já utilizado, tente outro!",
    );

    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveStyle({ color: "rgb(0, 128, 0)" });

    expect(ErrorMessage).not.toBeInTheDocument();
  },
};

export const AlreadyTakenForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "jacadastrado@gmail");

    await userEvent.type(canvas.getByTestId("password"), "123456");

    await userEvent.click(canvas.getByRole("button"));

    const successMessage = canvas.queryByText(
      "Tudo certo. Sua conta está pronta e provavelmente devemos te logar.",
    );

    const ErrorMessage = canvas.queryByText(
      "E-mail já utilizado, tente outro!",
    );

    expect(successMessage).not.toBeInTheDocument();

    expect(ErrorMessage).toBeInTheDocument();
    expect(ErrorMessage).toHaveStyle({ color: "rgb(255, 0, 0)" });
  },
};
