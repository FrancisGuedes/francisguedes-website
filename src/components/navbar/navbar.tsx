import { Link } from 'react-router-dom';
import { functionalitiesAlias } from '../../util/strings';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';

const labelText = {...functionalitiesAlias.navbar};

const Navbar = () => {
  return ( 
    <>
      <div className="navbar-wrapper">
        <h2 className='cv-title navbar-title'>
          <Link rel="canonical" data-new-state="cv" className='cv-title-link wiggle-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" >
            {labelText.cv}
            <Wiggle wordText={labelText.cv}/>
          </Link>
        </h2>
        <h2 className='work-title navbar-title'>
          <Link rel="canonical" data-new-state="work" className='work-title-link wiggle-link' to="/work">
            {labelText.work}
            <Wiggle wordText={labelText.work}/>
          </Link>
        </h2>
        <h2 className='playground-title navbar-title'>
          <Link data-new-state="playground" className='playground-title-link wiggle-link' to="/playground" rel="canonical">
            {labelText.playground}
            <Wiggle wordText={labelText.playground}/>
          </Link>
        </h2>
      </div>
    </>
  );
}

export default Navbar;