import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function Requiredauth(props) {
    const Auth=useAuth
    if(Auth.user){
        return (
            <div>{props.children}</div>
          )
    }else{
        return<Navigate to="/signin"/>
    }
}
