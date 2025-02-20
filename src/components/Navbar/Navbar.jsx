import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b p-3">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          {/* <img src="/img/icon/logo-b.png" alt="Logo" className="w-32" /> */}
          Top-Class
        </a>
      </div>

      <div className="flex-none gap-2">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
          </ul>
        </div>

        <div role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <i className="bi bi-brightness-high text-xl"></i>
          </div>
        </div>

        <div className="dropdown dropdown-end flex justify-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="bi bi-bell text-xl"></i>
              <span className="badge indicator-item flex text-[10px] justify-center items-center bg-green-600 border-0 text-white rounded-full w-5 h-5">
                5
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-14 w-52 shadow-md border"
          >
            <div className="card-body">
              {/* <span className="text-lg font-bold">3 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div> */}
              <span className="text-center">No notifications yet.</span>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end flex justify-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full w-11">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-14 w-52 p-2 shadow-md border"
          >
            <li>
              <a>
                <i class="bi bi-house"></i>
                <span>Back to site</span>
              </a>
            </li>
            <li>
              <a>
                <i class="bi bi-person-gear"></i>
                <span>Profile information</span>
              </a>
            </li>
            <li>
              <a>
                <i class="bi bi-box-arrow-left"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
