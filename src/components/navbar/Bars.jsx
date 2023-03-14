import { Squash as Hamburger } from 'hamburger-react';
import { useAppContext } from '../../context/context';

const Bars = () => {
  const { openMenu, openSidebar } = useAppContext();

  return (
    <>
      <Hamburger
        size={34}
        color="#4FC1EB"
        rounded
        toggled={openSidebar}
        toggle={openMenu}
      />
    </>
  );
};

export default Bars;
