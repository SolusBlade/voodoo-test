import s from "./Header.module.scss"
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <a href="/voodoo-test" className={s.logo}>
          <img src={logo} alt="logo" className={s.logoImg} />
          <span>
            <p>VooDoo</p>
            <p>Test</p>
          </span>
        </a>

        <div className={s.btnWrap}>
          <button className={s.btn}>About us</button>
          <button className={`${s.signInBtn} ${s.btn}`}>Sign-in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
