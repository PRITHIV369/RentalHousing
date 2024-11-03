import React from 'react'

function Login() {
    return (
        <>
        <div className='h-screen flex justify-center items-center font-popins bg-violet-100'>
            <div className="flex  rounded-md shadow-xl w-2/3  h-4/5 ">
                <div className='w-3/6  flex justify-center items-center bg-white'>
                    <form className=' w-3/4 h-3/4 '>
                        <div className='text-xl font-extrabold'>Welcome back!</div>
                        <small className='text-xsm text-grey-800 mt-0'>Enter to get signed-in</small>
                        <br/>
                        <br/>
                        <label htmlFor="user" className='text-sm font-bold'>User </label>
                        <br/>
                        <input type="text" id="user" placeholder='Enter username' className="text-xs pl-3 border border-grey rounded-md h-10 w-full mb-2"/>
                        <br/>
                        <label htmlFor="password" className='text-sm font-bold'>Password </label>
                        <br/>
                        <input type='password' id="password" placeholder="Enter password" className="text-xs pl-3 border border-grey rounded-md h-10 w-full mb-2"/>
                        <div className='text-xs py-2 items-base'>
                            <input type="checkbox" id="remember"/><label htmlFor="remember" >Remember me</label>
                            <a href='#' className='text-violet-600 float-right'>Forgot your password ?</a>
                        </div>
                        <button className="bg-violet-600 text-white rounded-sm p-2 w-full ">Submit</button>
                        <p className='text-center text-xs py-3 '>-----or------</p>
                        <button className="border-black border rounded-sm p-2 w-full">Sign up with Google</button>
                    
                    </form>
                    <div className=''>

                    </div>
                </div>
                <div className='bg-violet-600 h-full w-1/2 flex items-center justify-center'> 
                    Hello, welcome !
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
 