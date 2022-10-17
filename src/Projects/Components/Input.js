import React from 'react'

const InputField = ({input, placeholder}) =>{
    return <div>
        <input type={input} alt="" className='h-11 w-72 text-red-700 font-bold border border-gray-900 rounded-md text-center ' placeholder={placeholder}/>
    </div>
}

const Input = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-center mt-5'>
        <InputField placeholder="Please Enter Your Name.."/>
        <InputField input="email" placeholder="Please Enter Your Email"/>
        <InputField input="password" placeholder="Please Enter Passowrd"/>
        <InputField input="password" placeholder="Confirm Passowrd"/>
    </div>
  )
}

export default Input