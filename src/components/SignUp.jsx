import React from 'react'

function SignUp() {
    return (
        <>
            <div className='h-screen flex justify-center items-center font-popins bg-violet-100'>
            <div className="flex rounded-md shadow-xl w-2/3  h-4/5 ">
                <div className='w-full lg:w-1/2 flex justify-center items-center  bg-white'>
                    <form className=' w-3/4 h-auto '>
                        <div className='text-xl font-extrabold'>Sign Up</div>
                        <small className='text-xs text-grey-800 mt-0'>Enter to get signed-up</small>
                        <br/>
                        <br/>
                        <label htmlFor="user" className='text-sm font-bold'>Email:</label>
                        <br/>
                        <input type="text" id="user" placeholder='Enter Email-id' className="text-xs pl-3 border border-grey rounded-md h-10 w-full mb-2"/>
                        <br/>
                        <label htmlFor="password" className='text-sm font-bold'>Password:</label>
                        <br/>
                        <input type='password' id="password" placeholder="Enter password" className="text-xs pl-3 border border-grey rounded-md h-10 w-full mb-2"/>
                        <button className="bg-violet-600 text-white rounded-sm p-2 w-full ">Sign-Up</button>                    
                    </form>
                </div>
                <div className='bg-violet-600 h-full w-1/2 hidden lg:flex items-center justify-center'> 
                    Hello, welcome !
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp