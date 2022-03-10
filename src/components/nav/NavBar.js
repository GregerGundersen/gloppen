import Link from './Link';


const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
      <li>
        <Link to={'/admin'}>Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
