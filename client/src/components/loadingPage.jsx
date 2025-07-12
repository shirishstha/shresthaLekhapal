import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const navigate = useNavigate();
  const status = useSelector(state => state.status);

  useEffect(() => {
    if (status === 'expired' || status === 'unauthenticated') {
      toast.error('Redirecting to login page as unauthorized access detected');
      const timeout = setTimeout(() => {
        navigate('/login');
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, []);



  return (
    <div>Unauthorized access detected</div>

  )
}

export default LoadingPage