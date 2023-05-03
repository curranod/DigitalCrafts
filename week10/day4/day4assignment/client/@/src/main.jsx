import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import AddPage from './components/AddPage'
import Register from './components/Register'
import Updater from './components/Updater'
import Signin from './components/Signin'
import ProtectedRoute from './components/ProtectedRoute'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const token = localStorage.getItem('jwtToken')
if(token) {
  store.dispatch({type: 'ON_LOGIN', payload: token})
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><App /></ ProtectedRoute >} />
          <Route path="/add-book" element={<AddPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/update-book/:_id/:title/:genre/:publisher/:year" element={< Updater />} />
        </Routes>
      </BrowserRouter>
    </Provider >
  </React.StrictMode>
)