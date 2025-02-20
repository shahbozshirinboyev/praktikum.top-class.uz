import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className='w-full h-screen p-8 lg:p-12 2xl:p-24 flex justify-center items-center bg-[#042e1c]'>
        <div className='border-0 h-[700px] w-[900px] bg-white rounded-3xl flex justify-center items-center box-border p-4 gap-4'>

          <div className='w-[50%] h-full flex flex-col justify-center items-center'>
            <h4 className='text-center text-3xl font-bold py-8'>Sign in</h4>
            <p className='text-[12px] font-medium'>Please enter yout details.</p>

            <button className='btn btn-wide mt-4 font-medium rounded-full flex justify-center items-center'>
              <i className="bi bi-google flex justify-center items-center"></i>
              <span>Sign in with Google</span>
            </button>

            <div className='flex justify-center items-center gap-2 my-4'>
              <hr className='border w-[100px] rounded-full' />
              <span className='text-slate-400'>or</span>
              <hr className='border w-[100px] rounded-full' />
            </div>

            <form action="" className='flex flex-col gap-2'>
              <label className="rounded-full border flex items-center gap-2 px-4 py-3 w-full">
                <input type="text" className="grow outline-none" placeholder="+998 94 362 64 35" />
                <i class="bi bi-telephone  opacity-70"></i>
              </label>
              <label className="rounded-full border flex items-center gap-2 px-4 py-3 w-full">
                <input type="password" className="grow outline-none" placeholder="Password" />
                <i class="bi bi-eye  opacity-70"></i>
              </label>
              <div className='text-[12px] text-slate-400 flex justify-end'>
                <button className='font-normal'>Forgot password?</button>
              </div>
              <button className='btn btn-wide mt-4 font-medium rounded-full flex justify-center items-center'>
                Sign in
              </button>
              <div className='text-[12px] flex justify-center items-center gap-1 pt-3'>
                <span className='font-normal text-slate-400'>Don't have an account?</span>
                <button className='font-semibold text-slate-500' onClick={handleSignUpRedirect}>Sign Up</button>
              </div>
            </form>
          </div>

          <div className={`w-[50%] hidden md:inline-block  h-full border bg-[url("/img/bg/sign_in_bg.webp")] rounded-3xl bg-cover bg-center`}>

          </div>

        </div>
      </div>
    </>
  );
}

export default SignIn;