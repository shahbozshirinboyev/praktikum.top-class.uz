import React from 'react'

function Courses() {
  return (
    <div className='container'>
      <section className='courses' id='courses'>
        <h2 className='text-center mt-10 mb-5 font-semibold text-[28px]'>Courses</h2>
        {/* Navbar */}
        <div className="navbar bg-base-100 rounded-lg justify-end lg:justify-center ">
          <div className="gap-2 hidden lg:flex">
            <button className='btn btn-sm'>All</button>
            <button className='btn btn-sm'>Artificial Intelligence</button>
            <button className='btn btn-sm'>Animation 3D</button>
            <button className='btn btn-sm'>Full Stack</button>
            <button className='btn btn-sm'>Animation</button>
            <button className='btn btn-sm'>Front End</button>
            <button className='btn btn-sm'>Back End</button>
            <button className='btn btn-sm'>Design</button>
          </div>

          <div className="flex lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                <i className="bi bi-list text-[20px]"></i>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] right-0  mt-3 w-52 p-2 shadow">
                <li><a>All</a></li>
                <li><a>Artificial Intelligence</a></li>
                <li><a>Animation 3D</a></li>
                <li><a>Full Stack</a></li>
                <li><a>Animation</a></li>
                <li><a>Front End</a></li>
                <li><a>Back End</a></li>
                <li><a>Design</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Navbar */}

        {/* Courses */}
        <div className='my-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((course, index) => (
              <div className='card shadow-lg'>
                <figure>
                  <img src={`https://picsum.photos/id/${273+index}/400/300`} alt={`course${index}`} className='object-cover' />
                </figure>
                <div className='card-body p-4 flex flex-col justify-between'>

                  <div>

                  <span className='flex items-center gap-1 text-sm'>
                    <i class="bi bi-person-fill"></i>
                    <span>234 o'quvchi</span>
                  </span>

                  <h2 className='card-title'>Course Name {index + 1}</h2>

                  <div className='flex flex-col gap-0'>
                    <span className=''>Anvar Narzullayev</span>
                    <span>Mirzabek Xolmedov</span>
                    <span className={`${index % 2 === 0 ? "hidden" : "visible"}`}>Shoxrux Mirzayev</span>
                  </div>
                  </div>

                  <div className='card-actions mt-2'>
                    <span className='font-bold'>2 300 000 so'm</span>
                  </div>

                </div>
              </div>
          ))}
        </div>
        {/* /Courses */}

      </section>
    </div>
  )
}

export default Courses