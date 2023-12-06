import { Routes, Route, useLocation } from 'react-router-dom'
import NoPage from './NoPage'
import Auth from '../components/Authentication'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import AuthControl from './AuthControl'
import Profile from './Profile'
import Products from './Products'

const AuthHome = AuthControl(Home)
const AuthProfile = AuthControl(Profile)
const AuthProducts = AuthControl(Products)


export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} /> {/* AuthHome */}
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} /> {/* AuthProfile */}
        <Route path='/products' element={<Products />} /> {/* AuthProducts */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
