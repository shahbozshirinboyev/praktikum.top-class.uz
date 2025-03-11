import { NavLink, Outlet } from "react-router-dom"

function Profile() {
  return (
    <div className='bg-slate-100'>
      <section className='flex container py-4 gap-4 box-border'>

        <div className='w-72 p-3 bg-white rounded-lg'>
          <ul className='flex flex-col gap-3'>
            {[
              { to: '/profile', icon: 'bi-person-circle', label: 'My information' },
              { to: '/profile/experience', icon: 'bi-briefcase', label: 'My experiences' },
              { to: '/profile/certificate', icon: 'bi-patch-check', label: 'My certificates' },
              { to: '/profile/paymenthistory', icon: 'bi-clock-history', label: 'Payment history' },
              { to: '/profile/mydevices', icon: 'bi-tv', label: 'My devices' }
            ].map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `btn w-full flex justify-start items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`
                  }
                >
                  <i className={`bi ${icon} text-xl`}></i>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex-1 rounded-lg'>
          <Outlet />
        </div>

      </section>
    </div>
  )
}

export default Profile