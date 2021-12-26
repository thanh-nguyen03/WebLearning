import { ImStatsBars } from 'react-icons/im';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const NavBtn = ({ icon, text }) => {
  return (
    <div>
      <button className="btn nav-btn">
        {icon === 'report' ? (
          <ImStatsBars />
        ) : icon === 'setting' ? (
          <AiTwotoneSetting />
        ) : (
          <FaUserCircle />
        )}

        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default NavBtn;
