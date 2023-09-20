import { DefaultTheme, css, styled } from "styled-components";
import { ColorVariants } from "../../types/theme";

export type ButtonStyledProps = DefaultTheme & {
  variant?: "solid" | "outline" | "text";
  color?: keyof ColorVariants | undefined;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  backgroundColor?: string;
  iconPosition?: "left" | "right";
};

const getColorVariantStyles = ({
  color = "primary",
  variant = "solid",
  theme,
}: ButtonStyledProps) => {
  if (variant === "outline") {
    return css`
      background-color: transparent;
      color: ${theme.colors[color].main};
      border: 1px solid ${theme.colors[color].main};

      &:hover {
        background-color: ${theme.colors[color].main};
        border: 1px solid ${theme.colors[color].main};
        color: ${theme.colors.white};
      }

      &:disabled {
        background-color: transparent;
        color: ${theme.colors[color].light};
        border: 1px solid ${theme.colors[color].light};

        &:hover {
          background-color: transparent;
          color: ${theme.colors[color].light};
          border: 1px solid ${theme.colors[color].light};
        }
      }
    `;
  }

  if (variant === "text") {
    return css`
      border: 2px solid transparent;
      border-radius: 0;
      background-color: transparent;
      color: ${theme.colors[color].main};

      &:hover {
        color: ${theme.colors[color].dark};
        border-bottom: 2px solid ${theme.colors[color].dark};
      }

      &:disabled {
        color: ${theme.colors[color].light};

        &:hover {
          color: ${theme.colors[color].light};
          border: none;
        }
      }
    `;
  }

  return css`
    background-color: ${theme.colors[color].main};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors[color].dark};
    }

    &:disabled {
      background-color: ${theme.colors[color].light};

      &:hover {
        background-color: ${theme.colors[color].light};
      }
    }
  `;
};

const getSizeStyles = ({ size = "md", theme }: ButtonStyledProps) => {
  switch (size) {
    case "sm":
      return css`
        font-size: ${theme.fonts.size.sm};
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
      `;
    case "md":
      return css`
        font-size: ${theme.fonts.size.md};
        padding: ${theme.spacing.xs} ${theme.spacing.md};
      `;
    case "lg":
      return css`
        font-size: ${theme.fonts.size.lg};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<ButtonStyledProps>`
  border: 0;
  outline: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${({ iconPosition }) =>
    iconPosition === "left" ? "row" : "row-reverse"};
  gap: ${({ theme }) => theme.spacing.xs};

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  line-height: 1;

  ${(props) => getSizeStyles(props)}
  ${(props) => getColorVariantStyles(props)}

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
