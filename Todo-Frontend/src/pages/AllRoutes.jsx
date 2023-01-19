import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Login from './Login'
import Home from "./Home"
import PrivateRoute from '../private/PrivateRoute'
import Signup from './Signup'
import AllTodos from './AllTodos'
import Profile from './Profile'
import EditTodo from './EditTodo'
import Summary from "../pages/Summary"
import GoogleCheck from './GoogleCheck';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/todos" element={<PrivateRoute><AllTodos/></PrivateRoute>}/>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/todo/:id" element={<PrivateRoute><EditTodo/></PrivateRoute>}/>
      <Route path="/summary" element={<Summary/>}/>
      <Route path="/googlecheck" element={<GoogleCheck/>}/>
    </Routes>
   
  )
}

export default AllRoutes
