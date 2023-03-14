import React from 'react';
import MenuItem from './MenuItem';
import navMenu from '../../data/navbar_data';
import { useAppContext } from '../../context/context';

const Sidebar = () => {
  const { openSidebar } = useAppContext();
  const right = openSidebar ? 'right-0' : 'right-[100%]';

  return (
    <>
      <div
        className={`absolute top-[85px] ${right} h-[auto] w-[100vw] bg-primary py-8 text-center transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col justify-center items-center text-text-black">
          {navMenu.map((item) => {
            const { id, title, url } = item;
            return <MenuItem key={id} title={title} url={url} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
