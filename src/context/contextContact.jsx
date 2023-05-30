import { createContext,useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PropTypes from"prop-types"

export const AuthContextContact = createContext({})
export const AuthProviderContact = ({children}) =>{
    const [respContact, setResp] = useState({})
  
    
    const [user, setUser] = useState({})
    
    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpenUser, setModalOpenUser] = useState(false)
    const [modalCloseUser, setModalCloseUser] = useState(false)
    const [modalOpenEdit, setModalOpenEdit] = useState(false)
    const [modalOpenInfo, setModalOpenInfo] = useState(false)
    const [modalCloseInfo, setModalInfoClose] = useState(false)
    const [modalClose, setModalClose] = useState(false)
    const [modalCloseEdit, setModalCloseEdit] = useState(false)

    const token = localStorage.getItem("@tokenUser")
    
    const submitForm = async (data)=>{
       
        const newContact ={
            name: data.name,
            email:data.email,
            phone: parseInt(data.phone),
        }
        try {
            const response = await axios.post("http://localhost:3000/user/contact", newContact,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
             
            })
             console.log(response)
            if(response.request.statusText === "Created"){
                toast("Contato criado com sucesso.")
            }
        } catch (error) {

            if(error.response.statusText === "Conflict"){
                toast.error("Email ja registrado!")
            }
            else {
                toast.error("Ops!algo deu errado.")
            }            
        }
    };
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const response = await axios.get("http://localhost:3000/user/info-account",{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                })
              
              
                setResp(response.data.contacts)
                setUser(response.data)
             
                

            } catch (error) {
                console.log(error)
                
            }
        }
        getUser()
    },[user.contacts ,user.data,token])
     
    const logout =()=>{
        window.localStorage.clear();
        window.location.href="/login"

    }

    const closeModal = () =>{
        setModalClose(true);
        setTimeout(()=>{
            setModalClose(false)
            setModalOpen(false)
        }, 600)
    }
    const closeModalEdit = () =>{
        setModalCloseEdit(true);
        setTimeout(()=>{
            setModalCloseEdit(false)
            setModalOpenEdit(false)
        }, 600)
    }
    const closeModalEditUser = () =>{
        setModalCloseUser(true);
        setTimeout(()=>{
            setModalCloseUser(false)
            setModalOpenUser(false)
        }, 600)
    }
    const closeModalInfoUser = () =>{
        setModalInfoClose(true);
        setTimeout(()=>{
            setModalInfoClose(false)
            setModalOpenInfo(false)
        }, 600)
    }

    const deleteContact = async (elemento) =>{
       
        try {
            const response = await axios.delete(`http://localhost:3000/user/contact/delete/${elemento}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
           
            if(response.request.status === 204){
                toast.success("Contact deletado!")
                closeModal()
            }
            else if(response.request.statusText === "Contact not found"){
                toast.error("Contato ja excluido!")
            }
            else{
                toast.error("Ops! Algo deu errado")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitFormEdit = async (data, id)=>{
        console.log(data)
        const newContact ={
            name: data.name,
            email:data.email,
            phone: parseInt(data.phone),
        }
        try {
            const response = await axios.patch(`http://localhost:3000/user/contact/edit/${id} `, newContact,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            if (response.status === 200) {
                toast.success("Contato editado com sucesso!");
                closeModal();
            } else if (response.status === 404) {
                toast.error("Contato não encontrado!");
            } else {
                toast.error("Ops! Algo deu errado");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <AuthContextContact.Provider value={{deleteContact, modalClose, respContact,modalOpen, user, setUser,modalOpenEdit, setModalOpenEdit, logout,submitForm,closeModal, setModalOpen,submitFormEdit, modalCloseEdit, modalOpenUser,setModalOpenUser, closeModalEdit,setModalCloseEdit,setModalCloseUser,modalCloseUser, closeModalEditUser, modalOpenInfo, setModalOpenInfo, modalCloseInfo, closeModalInfoUser}}>
            {children}
        </AuthContextContact.Provider>
    )
}

AuthProviderContact.propTypes = {
    children: PropTypes.node.isRequired
  };
  



