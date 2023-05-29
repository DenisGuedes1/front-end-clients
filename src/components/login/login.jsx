import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import { AuthContext } from "../../context";
import {
  Containerlogin,
  TitleLogin,
  FormularioLogin,
  TitleFormLoginH3,
  LabelFormLogin,
  WarningRegister,
  Error,
  ButnLogin,
  BtnPageLoginRegister,
  InputAll,
  DivContent,
  LinkStyle,
} from "./style";

export const FormLoginPage = () => {
  const { loginUser, loading, setloading } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Digite sua senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  console.log(errors);

  const onSubmitFunction = (data) => {
    console.log(data, "data login")
    loginUser(data, setloading);
  };

  const navigateRegister = useNavigate();
  const pageRegister = () => {
    navigateRegister("/register");
  };
  return (
    <DivContent>
      <Containerlogin>
        <TitleLogin>Bem vindo!</TitleLogin>
        <FormularioLogin onSubmit={handleSubmit(onSubmitFunction)}>
          <TitleFormLoginH3>Login</TitleFormLoginH3>
          <LabelFormLogin htmlFor="Email">Email</LabelFormLogin>
          <InputAll placeholder="Email" {...register("email")} />
          <Error> {errors.email?.message}</Error>
          <LabelFormLogin htmlFor="password">Senha</LabelFormLogin>
          <InputAll
            type="password"
            placeholder="senha"
            {...register("password")}
          />

          <ButnLogin
            disabled={loading}
            type="submit"
            onClick={handleSubmit(onSubmitFunction)}
          >
            {loading ? "Entrando" : "Entrar"}
          </ButnLogin>

          <WarningRegister>Ainda não possui uma conta?</WarningRegister>
          <BtnPageLoginRegister onClick={() => pageRegister()}>
            <LinkStyle to="/cadastro">Cadastro</LinkStyle>
          </BtnPageLoginRegister>
        </FormularioLogin>
      </Containerlogin>
    </DivContent>
  );
};
