import { Routes, Route, useLocation } from 'react-router-dom'
import NoPage from './NoPage'
import Auth from '../components/Authentication'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import AuthControl from './AuthControl'
import Profile from './Profile'
import Products from './Products'
import Wishlist from './Wishlist'
import FurnitureDetails from './FurnitureDetails'

const AuthHome = AuthControl(Home)
const AuthProfile = AuthControl(Profile)
const AuthProducts = AuthControl(Products)
const AuthWishlist = AuthControl(Wishlist)
const AuthFurnitureDetails = AuthControl(FurnitureDetails)


export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} /> {/* element={<AuthHome />} */}
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} /> {/* element={<AuthProfile />} */}
        <Route path='/products' element={<Products />} /> {/* element={<AuthProducts />} */}
        <Route path='/wishlist' element={<Wishlist />} /> {/* element={<AuthWishlist />} */}
        <Route path='/wishlist' element={<FurnitureDetails />} /> {/* element={<AuthFurnitureDetails />} */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
