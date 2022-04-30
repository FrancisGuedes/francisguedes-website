import './arrowBack.css';
import { strings } from '../../util/strings';
import { Link } from 'react-router-dom';

const ArrowBack = () => {
  return ( 
    <>
      <Link to="/" className='project-back lone-arrow corner-project-back'>
        <span className='arrow'>
          <span className='arrow-tip'></span>
          <span className='arrow-length'></span>
        </span>
        <span className='arrow'>
          <span className='arrow-tip'></span>
          <span className='arrow-length'></span>
        </span>
        <span className='text-back'>{strings.arrowBack.title}</span>
      </Link>
    </>
  );
}

export default ArrowBack;