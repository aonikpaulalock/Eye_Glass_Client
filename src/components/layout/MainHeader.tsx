import brand from "../../assets/images/logo.jpg"
import { Icon } from '@iconify/react';
const MainHeader = () => {
  const navMenu =
    <>
      <Icon icon="icon-park-outline:logout" className="w-7 h-7 text-red-500 cursor-pointer" />
    </>
  return (
    <div className="container mx-auto md:px-10 px-2 py-2a">
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center">
            <img src={brand} alt="" className="w-16 h-16 mr-1" />
            <h1 className="brand-heading font-medium">Eye Glass</h1>
          </div>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal">
            {navMenu}
          </ul>
        </div>
        <div className='flex'>
          <label tabIndex={0} className="drawer-button sm:hidden" htmlFor="my-drawer-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#fcca03"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
      </div>
    </div>
  )
};

export default MainHeader;