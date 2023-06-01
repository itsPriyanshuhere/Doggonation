import React,{useEffect} from 'react'
import LoginForm from '../components/form/LoginForm'
import './RegisterPage.css'

const SignIn = (props) => {
  useEffect(() => {
    props.Sidebarrender(false)
  }, [])
  
  return (
    <>
    <div className='flex flex-row w-screen'>
      <div className='bg-white'>  
        <LoginForm/>
      </div>
      <div className=' w-half min-h-screen signinbackgroundimg  bg-no-repeat bg-cover '></div>
    </div>
    <div>

    </div>
    </>
  )
}

export default SignIn
//bg-doggo-background