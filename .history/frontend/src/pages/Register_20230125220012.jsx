import {useState, useEffect} from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })
  const {name,email,password,password2} = formData
  return (
    <div>
      <section className="heading">
        <h1></h1>
      </section>
    </div>
  )
}

export default Register