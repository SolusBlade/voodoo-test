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
        <p className={s.infoTextMob}>Important info</p>
        <img
          className={clsx(s.infoArrow, isOpen && s.isOpen)}
          src={arrowIco}
          alt="arrow"
        />
      </div>
      <div className={clsx(s.infoHidden, isOpen && s.isOpen)}>
        <span className={s.infoHiddenText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A tempora,
          temporibus laborum error ea consequatur. Nobis quidem quae hic, atque,
          blanditiis aperiam alias, laudantium nam officiis debitis vel sequi
          sapiente?
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
