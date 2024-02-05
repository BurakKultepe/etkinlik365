import React, { useContext } from 'react'
import Header from '../components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { AuthContext } from '../context/AuthContext';
import { privateRoutes, publicRoutes } from '../routes'


function Views() {
  
    const { isLogin } = useContext(AuthContext)

    return (
    <>
    <Header />

    <Routes>
  {
    publicRoutes.map((route, index) => {
      return <Route key={index} {...route} />
    }
    )
  }
  {
    isLogin ? privateRoutes.map((route, index) => {
      return <Route key={index} {...route} />
    }) : <></>
  }
</Routes>

<Footer/>
    </>
  )
}

export default Views ;