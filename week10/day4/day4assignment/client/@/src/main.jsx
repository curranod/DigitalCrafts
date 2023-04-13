import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import AddBook from './components/AddBook'
import Login from './components/Login'
import Signup from './components/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)