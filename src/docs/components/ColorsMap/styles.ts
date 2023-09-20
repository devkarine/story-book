import { getContrast } from "polished";
import { styled } from "styled-components";

type ColorContainerProps = {
  backgroundColor: string;
};

export const ColorContainer = styled.div<ColorContainerProps>`
  padding: 2rem;
  background: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ backgroundColor }) => backgroundColor};
`;

export const Color = styled.div<ColorContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
  color: ${({ backgroundColor }) =>
    getContrast(backgroundColor, "#FFF") < 3.5 ? "#000" : "#FFF"};
  background: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ backgroundColor }) => backgroundColor};
`;
