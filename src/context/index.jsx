import PropTypes from"prop-types"
import { createContext,  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api"
import axios from "axios";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [User, setUser] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@tokenUser");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get("http://localhost:3000/user/info-account", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //
      
        setUser(data);
        //
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const loginUser = async (formDataLogin) => {
    try {
      const response = await axios.post("http://localhost:3000/login", formDataLogin);
      const { token, user: UserResponse } = response.data;

      setUser(UserResponse);

      localStorage.setItem("@tokenUser", token);
   
      response.data.token = token 
      
      toast.success("Login efetuado com sucesso!")
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("Verifique suas credenciais ,estão correta.");
     
    }
  };
  const registerUser = async (formData, setLoading) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/register", formData);

       localStorage.setItem("@tokenUser", response.data.token);
       toast("Usuário registrado com sucesso!");

      setTimeout(() => {
      navigate("/login", { replace: true });
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteUserAccout = async(event)=>{
    event.preventDefault();

   try {

    const token = localStorage.getItem("@tokenUser")
    if(!token){
      return;
    }
    const responseDelete = await axios.delete("http://localhost:3000/user/delete-account",{
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
  
     setUser([]);
    localStorage.removeItem("@tokenUser")
     navigate("/register")
     console.log(responseDelete)
    toast.success("Conta excluida com sucesso")
    
   } catch (error) {
     toast.error("Ops! Houve um erro ! ")
     console.log(error)
   }
  }
  const updateUserData = async (data) => {
    try {
      const token = localStorage.getItem('@tokenUser');
      if (!token) {
        return;
      }
  
      const response = await api.patch('http://localhost:3000/user/dashboard/update', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      });
      console.log(response)
  
      if (response.request.status === 200) {
        toast.success('Dados atualizados com sucesso!');
       
      } else {
        toast.error('Ops! Algo deu errado ao atualizar os dados.');
      }
    } catch (error) {
      toast.error('Ops! Houve um erro ao atualizar os dados.');
      console.log(error);
    }
  };
  

  return (
    <AuthContext.Provider
      value={{ registerUser,updateUserData , loginUser, User, toast, loading, deleteUserAccout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};
  