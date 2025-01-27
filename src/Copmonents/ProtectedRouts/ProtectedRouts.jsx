import { Navigate } from 'react-router-dom'
import styles from './ProtectedRouts.module.css'
import Home from '../../Pages/Home/Home'

export default function ProtectedRouts(props) {

  if(localStorage.getItem("token")){
    return props.children
  }else{
    return <Navigate to={"/login"}/>
  }

}
