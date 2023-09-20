import { useState } from "react";
import * as S from "./styles";

const LoginForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = e.currentTarget[0] as HTMLInputElement;

    if (emailInput.value === "jacadastrado@gmail") {
      setError(true);
      console.log("Formulário inválido");
      return;
    }

    setSuccess(true);
    console.log("Formulário válido");
  };

  return (
    <S.LoginFormWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="email"
          placeholder="Email"
          data-testid="email"
          required
        />
        <S.Input
          type="password"
          placeholder="Password"
          data-testid="password"
          required
        />
        <S.Button type="submit">Login</S.Button>
      </S.Form>
      {success ? (
        <S.SuccessMessage>
          Tudo certo. Sua conta está pronta e provavelmente devemos te logar.
        </S.SuccessMessage>
      ) : null}
      {error ? (
        <S.ErrorMessage>E-mail já utilizado, tente outro!</S.ErrorMessage>
      ) : null}
    </S.LoginFormWrapper>
  );
};

export { LoginForm };
