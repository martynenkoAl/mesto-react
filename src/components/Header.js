import headerLogo from "../../src/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Место" className="header__logo" />
    </header>
  );
}

export default Header;
