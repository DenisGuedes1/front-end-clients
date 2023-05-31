import {Routes,Route} from 'react-router-dom'
import { Register } from '../pages/register'
import { Login } from '../pages/login'
import { Dashboard } from '../pages/dashboard'
import { InfoUser } from '../pages/info'

export const RoutesMain = ()=>{
 
    return(
        <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user/info" element={<InfoUser/>} />
      </Routes>
    )

}