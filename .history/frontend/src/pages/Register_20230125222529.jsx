import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })
  const {name,email,password,password2} = formData

  const onChange = () => {
    
  }

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser/>Register
        </h1>
        <p>please create an account</p>
      </section>
      <section className='form'>
        <form>
          <div className="form-group">
            <input type="text" 
            className='form-control' 
            id='name' 
            name='name' 
            value={name} 
            placeholder="enter your name"
            onChange={onChange} />
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register