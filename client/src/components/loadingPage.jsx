import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const navigate = useNavigate();
  useEffect = (() => {
    toast('Redirecting to login page');
    navigate('/login');

  });



  return (
    <div>Unauthorized access detected</div>

  )
}

export default LoadingPage