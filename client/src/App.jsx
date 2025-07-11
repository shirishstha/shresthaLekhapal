import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/auth/login'
import { LandingPage } from './pages/landingPage'
import { SelectCmp } from './pages/private/selectCmp'
import { HomePage } from './pages/private/homePage'
import Private from './components/routes/Private'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />

      {/* private routes */}
      <Route path='/private' element={<Private/>}>
        <Route path='/private/selectcmp' element={<SelectCmp />} />
        <Route path='/private/homepage' element={<HomePage />} />
      </Route>



    </Routes>




  )
}

export default App
