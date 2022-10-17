import React from 'react'

const Name =({Name, value}) =>{
    return <div>
        <button className='h-16 w-28 bg-gray-800 text-white rounded-md' >{Name} {value}</button>
    </div>
}


const Button = () => {
  return (
    <div>

        <div className='flex flex-wrap justify-center gap-5 pt-7'>
        <Name Name="Login"/>
        {/* <Name Name="logout"/> */}
        <Name Name="Sign up" />
        {/* <Name value="Click to Order" /> */}

        </div>
    </div>
  )
}

export default Button