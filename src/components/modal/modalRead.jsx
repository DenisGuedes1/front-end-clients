import { useContext } from "react";
import { AuthContextContact } from "../../context/contextContact";
import {
  TitleModalAddContact,
  ButtonCLoseModal,
  InputModalAdd,
} from "../../components/dashboard/dashStyle";
import { AuthContext } from "../../context/index";
import {
  FormModal,
  ModalDivModal,
  SpanModalinfo,
  LabelModal,ButtonDeleteAccount

} from "./styleModa";
const ModalInfoUser = () => {
  const { modalCloseInfo, closeModalInfoUser, user } = useContext(AuthContextContact);

  const { deleteUserAccout } = useContext(AuthContext);
 
  const handleDelete= async(event)=>{

   await deleteUserAccout(event)

  }

  return (
    <>
      <ModalDivModal>
        <FormModal>
          <SpanModalinfo>
            <TitleModalAddContact>Info users</TitleModalAddContact>
            <ButtonCLoseModal
              onClick={() => closeModalInfoUser()}
              disabled={modalCloseInfo}
            >
              X
            </ButtonCLoseModal>
          </SpanModalinfo>

          <LabelModal htmlFor="nome">Nome:</LabelModal>
          <InputModalAdd defaultValue={user.name} placeholder="digite seu nome" type="text" />

          <LabelModal htmlFor="email">Email:</LabelModal>
          <InputModalAdd defaultValue={user.email} placeholder="digite seu email" type="email" />

          <LabelModal htmlFor="phone">Phone:</LabelModal>
          <InputModalAdd type="number" defaultValue={user.phone} />

          <ButtonDeleteAccount onClick={handleDelete}>
            Excluir Perfil
          </ButtonDeleteAccount>
        </FormModal>
      </ModalDivModal>
    </>
  );
};

export default ModalInfoUser;
