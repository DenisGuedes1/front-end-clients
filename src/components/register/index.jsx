import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import * as yup from "yup";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../context";
import {
  DivConteiner,
  TitleEbtn,
  TitleP,
  Formulario,
  TitleForm,
  LabelAll,
  Allinput,
  ErrorP,
  BtnCadastrar,  
} from "./style";
export const FormRegister = () => {
  const { registerUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Digite sua senha com 8 dígitos e um caractere especial"),
    phone: yup.string().required("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

 
   const navigateLogin = useNavigate()

    const onSubmitFunction = (data) =>{
       console.log(data,"data register")
       console.log(data.phone)
        const baseData = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: parseInt(data.phone),
            data_register: data.data_register

        }
        registerUser(baseData, setLoading)
         navigateLogin("/login")
           
       
    }  

     return(
        <DivConteiner>
            <TitleEbtn>
                <TitleP>Seja bem vindo!</TitleP>
               
            </TitleEbtn>
            <Formulario onSubmit={handleSubmit(onSubmitFunction)}>
                <TitleForm>Crie sua conta </TitleForm>
                <LabelAll className="labelForName" htmlFor="Nome">Name</LabelAll>
                <Allinput type="text" name="Nome" placeholder="qual é seu nome"{...register("name")} />

                <LabelAll className="labelForName" htmlFor="email">Email</LabelAll>
                <Allinput type="text" name="email" placeholder="email"{...register("email")} />
                <ErrorP className="error"> {errors.email?.message}</ErrorP>
                
                <LabelAll className="labelForName" htmlFor="Senha">Senha</LabelAll>
                <Allinput type="password" name="Senha" placeholder="digite sua senha..."{...register("password")} />
                <ErrorP className="error"> {errors.password?.message}</ErrorP>
                                     
                    
                <LabelAll className="labelForName" htmlFor="phone">Digite seu telefone</LabelAll>
                <Allinput type="number" name="phone" placeholder="qual é seu telefone"{...register("phone")}/>
                <ErrorP className="error"> {errors.phone?.message}</ErrorP>

                <BtnCadastrar type="submit" disabled={loading} onClick={handleSubmit(onSubmitFunction)}  >
                    {loading ?  "Cadastrando..." : "Cadastrar"}
                </BtnCadastrar>

            </Formulario>

        </DivConteiner>
     )
}