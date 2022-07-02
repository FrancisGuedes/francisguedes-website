import './arrowBack.css';
import { functionalitiesAlias } from '../../util/strings';
import { Link } from 'react-router-dom';

const ArrowBack = () => {
  const text = {...functionalitiesAlias.arrowBack}
  return ( 
    <>
      <Link rel="canonical" to="/" className='project-back lone-arrow corner-project-back'>
        <span className='arrow'>
          <span className='arrow-tip'></span>
          <span className='arrow-length'></span>
        </span>
        <span className='arrow'>
          <span className='arrow-tip'></span>
          <span className='arrow-length'></span>
        </span>
        <span className='text-back'>{text.title}</span>
      </Link>
    </>
  );
}

export default ArrowBack;