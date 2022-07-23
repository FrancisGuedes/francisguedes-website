import { Link } from 'react-router-dom';
import { functionalitiesAlias } from '../../util/strings';
import Wiggle from '../wiggle/wiggle';

import './navbar.css';

const Navbar = () => {
  const labelText = {...functionalitiesAlias.navbar};

  const labelTextObject = { 
    labelTextCv: labelText.cv, 
    labelTextWork: labelText.work,
    labelTextPlayground: labelText.playground
  };
  return ( 
    <>
      <div className="navbar-wrapper">
        <h2 className='cv-title navbar-title'>
          <Link rel="canonical" data-new-state="cv" className='cv-title-link wiggle-link' to="https://drive.google.com/file/d/1VIzDJ8zL--0NaKThG0sTtc1Fys73_40W/view?usp=sharing" target="_blank" >
            {labelText.cv}
            <Wiggle 
              labelTextProps={labelTextObject}
            />
          </Link>
        </h2>
        <h2 className='work-title navbar-title'>
          <Link rel="canonical" data-new-state="work" className='work-title-link wiggle-link' to="/work">
            {labelText.work}
            <Wiggle 
              labelTextProps={labelTextObject}
            />
          </Link>
        </h2>
        <h2 className='playground-title navbar-title'>
          <Link data-new-state="playground" className='playground-title-link wiggle-link' to="/playground" rel="canonical">
            {labelText.playground}
            <Wiggle 
              labelTextProps={labelTextObject}
            />
          </Link>
        </h2>
      </div>
    </>
  );
}

export default Navbar;