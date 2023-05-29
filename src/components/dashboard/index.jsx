import {AuthContextContact} from "../../context/contextContact"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useContext, useState} from "react"
import axios from "axios"
import {toast} from "react-toastify"
import {Btnlogout,FormAddContact,ButtonCadContact,ButtonOpenModal,DivNameTitleBtnADD,HeaderInfoUser,InputModalAdd,LabelAll,ModalDiv,NameTiltle,NavDash,SpanHeader,SpanTitleEClose,TitleModalAddContact,H1Contact, EmailContact, MainContact,LiContactList, UlConteinerContact, SectionContact, NameContact, ButtonCLoseModal, ModalDivEdit, FormEdit}from "./dashStyle"

export const DashUser = () =>{

    const {
         modalClose, 
         closeModal,
         modalOpen,
         setModalOpen,
         logout,modalOpenEdit,setModalOpenEdit,
         submitForm,user,respContact,deleteContact,  modalCloseEdit, closeModalEdit
    } = useContext(AuthContextContact)
    let arrayContact = Object.values(respContact)
    const formSchemaCreatedContact= yup.object().shape({
        name: yup.string().required("nome do contato obrigatorio"),
        email: yup.string().required("email obrigatorio"),
        phone: yup.string().required("Telefone Obrigatorio"),
    })
    
    const {
        register,
        handleSubmit: handleCreatedSubmit,
        
      } = useForm({
        resolver: yupResolver(formSchemaCreatedContact),
      });
      const [elementoId, setElementoId] = useState('');
      const [dadosFormulario, setDadosFormulario] = useState({
        name: '',
        email: '',
        phone: '',
      });
    

      const handleEdit = (id) => {
        setElementoId(id);
        setModalOpenEdit(true);
     
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSubmitEdit = async (e) => {
        e.preventDefault();
        try {
          const newContact = {
            name: dadosFormulario.name,
            email: dadosFormulario.email,
            phone: parseInt(dadosFormulario.phone),
          };
    
          const response = await submitFormEdit(newContact, elementoId);
    
          if (response.request.statusText  === "Ok") {
            toast.success('Contato editado com sucesso!');
            setModalOpenEdit(false);
          } else if (response.request.statusText  === "not found") {
            toast.error('Contato não encontrado!');
          } else {
            toast.error('Ops! Algo deu errado');
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      const submitFormEdit = async (data, id) => {
        console.log(data);
        console.log(id);
        try {
          const response = await axios.patch(
            `http://localhost:3000/user/contact/edit/${id}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          return response;
        } catch (error) {
          console.log(error);
        }
      };
    
    
      
    const token = localStorage.getItem("@tokenUser")
    if(!token){
        window.location.href="/login"
    }
    return(
         <>
            {modalOpen && (
            <ModalDiv>
                <FormAddContact onSubmit={ handleCreatedSubmit(submitForm)}>
                   <SpanTitleEClose>
                    <TitleModalAddContact> Adicionar Contato</TitleModalAddContact>
                     <ButtonCLoseModal onClick={()=> closeModal()} disabled={modalClose}>
                       X
                     </ButtonCLoseModal>
                   </SpanTitleEClose>
                   <LabelAll>Nome</LabelAll>
                   <InputModalAdd placeholder="insira o nome"{...register("name")}/>
               
                   <LabelAll>Email</LabelAll>
                   <InputModalAdd placeholder="digite o email"{...register("email")}/>
                   

                   <LabelAll>Phone</LabelAll>
                   <InputModalAdd placeholder="digite um telefone..."{...register("phone")}/>
                   
                    <ButtonCadContact type="submit" onSubmit={()=>handleCreatedSubmit(submitForm)}>
                        Cadastrar
                    </ButtonCadContact>


                </FormAddContact>
            </ModalDiv>
            )}

            <NavDash>
                <SpanHeader>
                  <Btnlogout onClick={()=> logout()}>Sair</Btnlogout>   
                    <button>Editar informações chaqamr modal</button>
                </SpanHeader>
            </NavDash>
            <HeaderInfoUser>
                <NameTiltle>Seja bem vindo,{user.name} </NameTiltle>
            </HeaderInfoUser>

            <DivNameTitleBtnADD>
                <H1Contact>Contato</H1Contact>
                <ButtonOpenModal onClick={()=> setModalOpen(true)}>+</ButtonOpenModal>
            </DivNameTitleBtnADD>
            <div>
                <MainContact>
                    <SectionContact>
                        {arrayContact.map((elemento)=>{
                          
                            return(
                                <UlConteinerContact key={elemento.id}>
                                    <LiContactList key={elemento} id={elemento.id}>
                                        <NameContact>{elemento.name} </NameContact>
                                        <EmailContact>{elemento.email} </EmailContact>
                                        <EmailContact>{elemento.phone} </EmailContact>
                                        <EmailContact>{elemento.date_register} </EmailContact>
                                        <span>
                                         <button id={elemento.id} onClick={()=>handleEdit(elemento.id) }>Editar</button>
                                         <button onClick={()=> deleteContact(elemento.id)} >Excluir</button>
                                        </span>
                                    </LiContactList>
                                </UlConteinerContact>
                            )
                        })}
                    </SectionContact>
                </MainContact>
            </div>

                {modalOpenEdit && (
            <ModalDivEdit>
                <FormEdit onSubmit={handleSubmitEdit}>
                   <SpanTitleEClose>
                    <TitleModalAddContact>Editar Contato</TitleModalAddContact>
                     <ButtonCLoseModal onClick={()=> closeModalEdit()} disabled={modalCloseEdit}>
                       X
                     </ButtonCLoseModal>
                   </SpanTitleEClose>
                   <LabelAll>Nome</LabelAll>
                   <InputModalAdd type="text" name="name" value={dadosFormulario.name} onChange={handleChange} placeholder="insira o nome"/>
               
                   <LabelAll>Email</LabelAll>
                   <InputModalAdd type="email" name="email"
                    value={dadosFormulario.email}
                    onChange={handleChange} placeholder="digite o email"/>
                   

                   <LabelAll>Phone</LabelAll>
                   <InputModalAdd type="number" name="phone"
                    value={dadosFormulario.phone}
                    onChange={handleChange} placeholder="digite um telefone..."/>
                   
                    <ButtonCadContact type="submit">
                        editar
                    </ButtonCadContact>


                </FormEdit>
            </ModalDivEdit>
            )}
            
           
         </>

    )
}