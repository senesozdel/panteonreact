import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { addNewUser } from '../dataRequests/FetchData'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterComp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registerError, setRegisterError] = useState('');

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


const handleRegister = async (e) => {
  e.preventDefault();
  try {
      const payload = {
          userName: username,
          email: email,
          password: password
      }

      const response = await addNewUser(payload);



      notify(response.data.message)




  } catch (error) {
      // Hata durumunda

  }
};
console.log(registerError)

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">Panteon</span>
                    </Link>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                        <p className="text-center small">Enter your personal details to create account</p>
                      </div>
                      <form className="row g-3 needs-validation" onSubmit={handleRegister} >
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">Your Email</label>
                          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="form-control" id="yourEmail" required />
                          <div className="invalid-feedback">Please enter Link valid Email adddress!</div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Username</label>
                          <div className="input-group has-validation">

                            <input onChange={(e)=>setUsername(e.target.value)}  type="text" name="username" className="form-control" id="yourUsername" required />
                            <div className="invalid-feedback">Please choose Link username.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                            <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <Link >terms and conditions</Link></label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Create Account</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Already have an account? <Link to="/login" >Log in</Link></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
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

export default RegisterComp