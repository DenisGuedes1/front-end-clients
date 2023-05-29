import { useContext } from "react"
import  { useState } from 'react';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { AuthContextContact } from '../../context/contextContact';
import{ButtonCadContact, ModalDiv, FormAddContact,SpanTitleEClose, TitleModalAddContact, ButtonCLoseModal, LabelAll, InputModalAdd} from "../../components/dashboard/dashStyle"

const ModalEditContato =() => {
    const {
        editContact,modalCloseEdit, setModalCloseEdit,setModalOpenEdit,
            
    } = useContext(AuthContextContact)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setPhone(event.target.value);
  };


  
  const formSchemaCreatedContact= yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    phone: yup.string(),
 
})
const onSubmitFunction = (data) => {
  console.log(data)
   
    editContact(data);
  };

const {
    
    handleSubmit,
    
  } = useForm({
    resolver: yupResolver(formSchemaCreatedContact),
  });
  const closeModal = () =>{
    setModalCloseEdit(true);
    setTimeout(()=>{
      setModalCloseEdit(false)
        setModalOpenEdit(false)
    }, 600)
}
  return (
    <>
      

      <ModalDiv>

        <FormAddContact onSubmit={handleSubmit(onSubmitFunction)}>
            <SpanTitleEClose>
            <TitleModalAddContact>Editar</TitleModalAddContact>
            <ButtonCLoseModal onClick={()=> closeModal()} disabled={modalCloseEdit}>X</ButtonCLoseModal>
            </SpanTitleEClose>
        
            <LabelAll htmlFor="nome">Nome:</LabelAll>
            <InputModalAdd type="text" id="nome" value={nome} onChange={handleNomeChange} />
         

         
            <LabelAll htmlFor="email">Email:</LabelAll>
            <InputModalAdd type="email" id="email" value={email} onChange={handleEmailChange} />
         

          
            <LabelAll htmlFor="phone">Phone:</LabelAll>
            <InputModalAdd type="text" value={phone} onChange={handleSenhaChange}/>
         

          <ButtonCadContact type="submit"onSubmit={handleSubmit(onSubmitFunction)} >Cadastrar</ButtonCadContact>
        </FormAddContact>
      </ModalDiv>
    </>
  );
}

export default ModalEditContato;
