import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoadingPage from '../loadingPage'
import { jwtDecode } from 'jwt-decode'
import toast from 'react-hot-toast'
import { tokenExpired } from '@/features/slice'
import axios from 'axios'

const Private = () => {
  const [ok, setOk] = useState(false);
  const [checking, setChecking] = useState(true);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const authCheck = async () => {
      if (!token) {
        setOk(false)
        setChecking(false)
        return
      }

      try {
        const decoded = jwtDecode(token)
        const isExpired = decoded.exp * 1000 < Date.now();
        if(isExpired){
          toast.error("Your token has expired please login again");
          dispatch(tokenExpired());
          localStorage.removeItem('userData');
          setOk(false);
          return
        }

        //sending token for validation to backend
        const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/auth/private`,{},{
          headers : {
            Authorization: `Bearer ${token}`
          }
        })
        if(res.data.success){
          setOk(true);
        }else{
          setOk(false);
        }
        
      } catch (error) {
        setOk(false);
      } finally {
        setChecking(false);
      }
    }

    authCheck()
  }, [token])

  if(checking){
    return <div>Validating please wait </div>
  }

  return ok ? <Outlet /> : <LoadingPage />
}

export default Private
