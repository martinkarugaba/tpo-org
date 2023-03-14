import React from 'react';
import Bars from './Bars';
import Logo from './Logo';
import Sidebar from './Sidebar';

const Navbar = () => (
  <div className="sticky top-0 left-0 flex justify-between items-center bg-white px-3 py-4 z-20">
    <Logo />
    <Sidebar />
    <Bars />
  </div>
);

export default Navbar;
