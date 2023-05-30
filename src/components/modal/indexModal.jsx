import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContextContact } from "../../context/contextContact";
import {
  ButtonCadContact,
  TitleModalAddContact,
  ButtonCLoseModal,
  InputModalAdd,
} from "../../components/dashboard/dashStyle";
import { AuthContext } from "../../context/index";
import {
  FormModal,
  ModalDivModal,
  SpanModal,
  LabelModal,
  
} from "./styleModa";
const ModalEditUser = () => {
  const { modalCloseUser, closeModalEditUser } = useContext(AuthContextContact);

  const {  updateUserData } = useContext(AuthContext);

  const formSchemaCreatedContact = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    phone: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchemaCreatedContact),
  });

  const onSubmitFunction = (data) => {
    const baseData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: parseInt(data.phone),
    };
    console.log(baseData);
    updateUserData(baseData);
  };

  return (
    <>
      <ModalDivModal>
        <FormModal onSubmit={handleSubmit(onSubmitFunction)}>
          <SpanModal>
            <TitleModalAddContact>Editar</TitleModalAddContact>
            <ButtonCLoseModal
              onClick={() => closeModalEditUser()}
              disabled={modalCloseUser}
            >
              X
            </ButtonCLoseModal>
          </SpanModal>

          <LabelModal htmlFor="nome">Nome:</LabelModal>
          <InputModalAdd
            placeholder="digite seu nome"
            type="text"
            {...register("name")}
          />

          <LabelModal htmlFor="email">Email:</LabelModal>
          <InputModalAdd
            placeholder="digite seu email"
            type="email"
            {...register("email")}
          />

          <LabelModal htmlFor="password">Senha:</LabelModal>
          <InputModalAdd type="password" {...register("password")} />

          <LabelModal htmlFor="phone">Phone:</LabelModal>
          <InputModalAdd type="number" {...register("phone")} />

         
            <ButtonCadContact
              type="submit"
              onSubmit={handleSubmit(onSubmitFunction)}
            >
              Editar
            </ButtonCadContact>

          
        </FormModal>
      </ModalDivModal>
    </>
  );
};

export default ModalEditUser;
