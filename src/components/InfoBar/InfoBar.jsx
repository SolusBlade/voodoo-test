import s from './InfoBar.module.scss';
import infoIco from '../../assets/infoIco.svg';
import arrowIco from '../../assets/arrow.svg';
import { useState } from 'react';
import clsx from 'clsx';

const InfoBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hendleInfoClick = () => {
    console.log(isOpen);
    setIsOpen(r => !r);
  };

  return (
    <div className={s.infoBox}>
      <div className={s.infoWrap} onClick={hendleInfoClick}>
        <div className={s.infoBoxWrap}>
          <img src={infoIco} alt="info" />
          <p className={s.infoIcoText}>Alpha</p>
        </div>
        <p className={s.infoText}>Important info regarding our service</p>
        <img
          className={clsx(s.infoArrow, isOpen && s.isOpen)}
          src={arrowIco}
          alt="arrow"
        />
      </div>
      <div className={clsx(s.infoHidden, isOpen && s.isOpen)}>
        <span className={s.infoHiddenText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, aliquid quam. Quibusdam consectetur ipsam temporibus ipsum a est voluptatem ut ratione? Dicta iusto consequatur porro dolorum, suscipit exercitationem hic quam.
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
