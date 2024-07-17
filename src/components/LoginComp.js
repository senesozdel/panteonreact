import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authUser } from '../dataRequests/FetchData'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import{setLoggedUser} from '../features/auth/AuthSlice'

const LoginComp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
const dispatch = useDispatch();

  const navigate = useNavigate()


  const notify = (par) => toast(par, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"

    });;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const payload ={
        userName: username,
        password: password
    }

        const response = await authUser(payload)
        const token = response.data;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token)
        const loggedUserName = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        const loggedUserEmail = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
        const loggedUser = {name:loggedUserName,email:loggedUserEmail}
        dispatch(setLoggedUser(loggedUser))
        navigate("/buildConfigs")
        
    } catch (err) {
        notify('Invalid username or password');
    }
};


  return (

  <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <Link  className="logo d-flex align-items-center w-auto">
                <img src="assets/img/logo.png" alt="" />
                <span className="d-none d-lg-block">Panteon</span>
              </Link>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p className="text-center small">Enter your username &amp; password to login</p>
                </div>
                <form className="row g-3 needs-validation" onSubmit={handleLogin}>
                  <div className="col-12">
                    <label htmlFor="yourUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                    
                      <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" className="form-control" id="yourUsername" required />
                      <div className="invalid-feedback">Please enter your username.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" className="form-control" id="yourPassword" required />
                    <div className="invalid-feedback">Please enter your password!</div>
                  </div>

                  <div className="col-12">
                    <button  className="btn btn-primary w-100" type="submit">Login</button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
  </div>


  )
}

export default LoginComp