import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error('Redirecting to login page as unauthorized access detected');

    setTimeout(() => {
      navigate('/login');
    }, 1500)


  }, []);



  return (
    <div>Unauthorized access detected</div>

  )
}

export default LoadingPage