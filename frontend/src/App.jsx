import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { ToastContainer } from "react-toastify"

import "react-toastify/ReactToastify.css";

function App() {

  return (
    <>
      <div className="app">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgessBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
