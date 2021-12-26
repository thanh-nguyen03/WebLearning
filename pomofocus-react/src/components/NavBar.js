import { FaCheckCircle } from 'react-icons/fa';
import NavBtn from './NavBtn';

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="logo-container">
        <FaCheckCircle className="logo-icon" />
        <h1 className="logo">Pomofocus</h1>
      </div>

      <div className="nav-buttons">
        <NavBtn icon="report" text="Report" />
        <NavBtn icon="setting" text="Setting" />
        <NavBtn icon="login" text="Login" />
      </div>
    </nav>
  );
};
export default NavBar;
