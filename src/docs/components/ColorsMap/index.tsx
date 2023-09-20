import { colors } from "../../../styles/themes";

import * as S from "./styles";
export function ColorsMap() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <>
        <S.ColorContainer key={color.light} backgroundColor={color.light}>
          <S.Color backgroundColor={color.light}>
            <strong>{key} light</strong>
            <span>{color.light}</span>
          </S.Color>
        </S.ColorContainer>
        <S.ColorContainer key={color.main} backgroundColor={color.main}>
          <S.Color backgroundColor={color.main}>
            <strong>{key} main</strong>
            <span>{color.main}</span>
          </S.Color>
        </S.ColorContainer>
        <S.ColorContainer key={color.dark} backgroundColor={color.dark}>
          <S.Color backgroundColor={color.dark}>
            <strong>{key} dark</strong>
            <span>{color.dark}</span>
          </S.Color>
        </S.ColorContainer>
      </>
    );
  });
}
