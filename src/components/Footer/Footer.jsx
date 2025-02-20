import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer bg-base-200 items-center p-4 border-t">
  <aside className="grid-flow-col items-center">
    <i className="bi bi-braces-asterisk text-3xl fill-current"></i>
    <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a className='cursor-pointer'>
      <i className="bi bi-globe fill-current text-[24px]"></i>
    </a>
  </nav>
</footer>
    </>
  )
}

export default Footer