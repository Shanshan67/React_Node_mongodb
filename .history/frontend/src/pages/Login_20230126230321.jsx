import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })
  const {email,password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isError,isSuccess,isLoading,message} = useSelector((state) => state.auth)//from the auth state which is only gloabal state we have

  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){//user为如果login时，跳转页面
      navigate('/')
    }
    dispatch(reset())//after double check, dispatch to reset
  },[user,isError,isSuccess,message,navigate,dispatch])

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <div>
      <section className="heading">
        <h1>
          <FaSignInAlt/>Login
        </h1>
        <p>login and start setting goals</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" 
            className='form-control' 
            id='email' 
            name='email' 
            value={email} 
            placeholder="enter your email"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" 
            className='form-control' 
            id='password' 
            name='password' 
            value={password} 
            placeholder="enter password"
            onChange={onChange} />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
