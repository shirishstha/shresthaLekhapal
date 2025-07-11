import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoadingPage from '../loadingPage'
import { jwtDecode } from 'jwt-decode'

const Private = () => {
  const [ok, setOk] = useState(false)
  const [checking, setChecking] = useState(true)
  const token = useSelector(state => state.token)

  useEffect(() => {
    const authCheck = () => {
      if (!token) {
        setOk(false)
        setChecking(false)
        return
      }

      try {
        const decoded = jwtDecode(token)
        const isExpired = decoded.exp * 1000 < Date.now()
        setOk(!isExpired)
      } catch (error) {
        setOk(false)
      } finally {
        setChecking(false)
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
