import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import MerchPage from './pages/MerchPage'
import CapybarasPage from './pages/capybaraPages/CapybarasPage'
import CommentsPage from './pages/commentsPages/CommentsPage'
import CartPage from './pages/CartPage'
import { CartPageContextProvider } from './components/cartComponents/CartContext'
import CapybaraPage from './pages/capybaraPages/CapybaraPage'
import CreateCapybaraPage from './pages/capybaraPages/CreateCapybaraPage'
import EditCapybaraPage from './pages/capybaraPages/EditCapybaraPage'
import CommentPage from './pages/commentsPages/CommentPage'
import EditCommentPage from './pages/commentsPages/EditCommentPage'
import CreateCommentPage from './pages/commentsPages/CreateCommentPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartPageContextProvider>
        <Routes>
          {/* <Route path='/' element={<App />}/> */}
          <Route path="/" element={<Navigate to="/project/home" replace />} />
          <Route path='project'>
            <Route path='home' element={<HomePage />}/>

            <Route path='menu' element={<MenuPage />}/>

            <Route path='merch' element={<MerchPage />}/>

            <Route path='capybaras' element={<CapybarasPage />}/>
            <Route path='capybaras/:id' element={<CapybaraPage />}/>
            <Route path='capybaras/create' element={<CreateCapybaraPage />} />
            <Route path='capybaras/edit/:id' element={<EditCapybaraPage />} />

            <Route path='comments' element={<CommentsPage />}/>
            <Route path='comments/:id' element={<CommentPage />}/>
            <Route path='comments/create' element={<CreateCommentPage />}/>
            <Route path='comments/edit/:id' element={<EditCommentPage />}/>

            <Route path="cart" element={<CartPage />} />
          </Route>

        </Routes>
      </CartPageContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
