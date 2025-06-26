import Input from "./Search";
import Logo from "./Logo.png"; 
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <div className="header-container">
      <header className="header">
        <nav>
          <Input />
          <img src={Logo} alt="Image" className="nav-logo" onClick={handleLogoClick} />
          <ul className="header-list">
            <li><a className="nav-link-register" href="/Register">Register</a></li>
            <li><a className="nav-link-login" href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
