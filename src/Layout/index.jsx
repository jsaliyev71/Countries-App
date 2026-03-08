import React, { useContext } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Context } from '../context/ContextProvider';
import Loading from '../pages/Loading';

function Layout() {
  const {data, loading} = useContext(Context);

  return (
    <>
        <Header />
        <main>
          {loading ? <Loading /> :
            <Outlet />
          }
        </main>
        <Footer />
    </>
  )
}

export default Layout