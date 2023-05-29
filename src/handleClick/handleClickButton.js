import { api } from "../services/api"

export const handleDeleteContact = (contactId) =>{

  api.delete(`/user/contact/delete/${contactId}`).then(()=>{
    window.location.reload()
  }).catch((error)=>{
    console.log(error)
  })
}

export const handlEditContact = (contactId) =>{

  api.patch(`/user/contact/edit/${contactId}`).then(()=>{
    window.location.reload()

  }).catch((error)=>{console.log(error)})
}