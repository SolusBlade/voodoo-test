import s from './Footer.module.scss';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <img src={logo} alt="logo" className={s.logoImg} />
        <div className={s.footerLinksWrap}>
          <ul>
            <li>FAQ</li>
            <li>RETURNS</li>
            <li>CONTACT</li>
          </ul>
          <ul>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
            <li>COOKIE SETTINGS</li>
          </ul>
          <ul>
            <li>ABOUT SECOND CHANCE</li>
            <li>CAREER</li>
            <li>FACEBOOK</li>
            <li>INSTAGRAM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
