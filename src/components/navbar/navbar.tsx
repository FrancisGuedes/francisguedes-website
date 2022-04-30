import { Link } from 'react-router-dom';
import { functionalitiesAlias } from '../../util/strings';

import './navbar.css';

const Navbar = () => {

  return ( 
    <>
      <h2 className='cv-title'>
        <Link className='cv-title-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" rel="history">
          {functionalitiesAlias.cv}
        </Link>
      </h2>
      <h2>
        <Link className='work-title-link' to="/work" rel="history">
          {functionalitiesAlias.work}
        </Link>
      </h2>
      <h2>
        <Link className='playground-title-link' to="/" rel="history">
          {functionalitiesAlias.playground}
        </Link>
      </h2>
    </>
  );
}

export default Navbar;