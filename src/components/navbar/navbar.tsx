import { Link } from 'react-router-dom';
import { functionalitiesAlias } from '../../util/strings';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';

const functionalitiesAliasObj = {...functionalitiesAlias.navbar};

const Navbar = () => {

  return ( 
    <>
      <div className="navbar-wrapper">
        <h2 className='cv-title navbar-title'>
          <Link data-new-state="cv" className='cv-title-link wiggle-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" rel="history">
            {functionalitiesAliasObj.cv}
            <Wiggle/>
          </Link>
        </h2>
        <h2 className='work-title navbar-title'>
          <Link data-new-state="work" className='work-title-link wiggle-link' to="/work" rel="history">
            {functionalitiesAliasObj.work}
            <Wiggle/>
          </Link>
        </h2>
        <h2 className='playground-title navbar-title'>
          <Link data-new-state="playground" className='playground-title-link wiggle-link' to="/" rel="history">
            {functionalitiesAliasObj.playground}
            <Wiggle/>
          </Link>
        </h2>
      </div>
    </>
  );
}

export default Navbar;