import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAppContext } from '../../context/context';

const MenuItem = ({ title, url }) => {
  const { closeSidebar } = useAppContext();

  return (
    <NavLink
      className="py-5 text-xl font-primary font-medium capitalize text-white transition-all duration-150 ease-in-out active:bg-secondary w-full"
      to={url}
      onClick={closeSidebar}
    >
      {title}
    </NavLink>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
