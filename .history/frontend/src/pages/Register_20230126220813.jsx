import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
//useSelector can select sth from the state
//useDispatch can do async thunk function or reset function in our reducer
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })
  const {name,email,password,password2} = formData

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
  },[user,isError,isSuccess,message,navigate,dispatch])//第二个参数，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染。

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //want to dispatch our register
    if(password !== password2){
      toast.error('password do not match')
    }else{
      const userData = {name,email,password}
      dispatch(register(userData))
    }
  }

  if()

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser/>Register
        </h1>
        <p>please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" 
            className='form-control' 
            id='name' 
            name='name' 
            value={name} 
            placeholder="enter your name"
            onChange={onChange} />
          </div>
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
            <input type="password" 
            className='form-control' 
            id='password2' 
            name='password2' 
            value={password2} 
            placeholder="confirm password"
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

export default Register