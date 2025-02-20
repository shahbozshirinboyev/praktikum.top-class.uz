import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Profile() {
  return (
    <div className='bg-slate-100'>
      <section className='flex container py-4 gap-4 box-border'>

        <div className='w-72 p-3 bg-white rounded-lg'>
          <ul className='flex flex-col gap-3'>
            <li>
              <NavLink to='/profile' className='btn w-full flex justify-start'>
                <i className="bi bi-person-circle text-xl"></i>
                <span>My information</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile/experience' className='btn w-full flex justify-start'>
                <i className="bi bi-briefcase text-xl"></i>
                <span>My experiences</span>
              </NavLink>
            </li>
            <li>
              <button className='btn w-full flex justify-start'>
                <i className="bi bi-patch-check text-xl"></i>
                <span>My certificates</span>
              </button>
            </li>
            <li>
              <button className='btn w-full flex justify-start'>
                <i className="bi bi-clock-history text-xl"></i>
                <span>Payment history</span>
              </button>
            </li>
            <li>
              <button className='btn w-full flex justify-start'>
                <i className="bi bi-tv text-xl"></i>
                <span>My devices</span>
              </button>
            </li>
          </ul>
        </div>

        <Outlet />

      </section>
    </div>
  )
}

export default Profile