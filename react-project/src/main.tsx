import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import MerchPage from './pages/MerchPage'
import GalleryPage from './pages/GalleryPage'
import ContactsPage from './pages/ContactsPage'
import CartPage from './pages/CartPage'
import { CartPageContextProvider } from './components/cartComponents/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<App />}/> */}

        <Route path='project'>
          <Route path='home' element={<HomePage />}/>
          <Route path='menu' element={<Menu />}/>
          <Route path='merch' element={<MerchPage />}/>
          <Route path='gallery' element={<GalleryPage />}/>
          <Route path='contacts' element={<ContactsPage />}/>
          <Route path="cart" element={<CartPageContextProvider><CartPage /></CartPageContextProvider>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
