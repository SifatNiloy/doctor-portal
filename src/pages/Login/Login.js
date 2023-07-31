import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (

    <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-xl text-center">Login</h1>
                <form >
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email </span> </label>
                        <input type="email" 
                           
                        className="input input-bordered input-success w-full max-w-xs" />  
                                                
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password </span> </label>
                        <input type="password" 
                            
                        className="input input-bordered input-success w-full max-w-xs" />  
                            
                        <label className="label"> <span className="label-text"> Forgot Password ? </span> </label>   
                                     
                    </div>
                   
                    <input className='btn btn-accent w-full' type="submit" />
                    
                </form> 
                <p>New to doctors portal? <Link className='text-secondary' to="/signup">Create an account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-accent'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};


export default Login;