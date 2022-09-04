import './arrowLink.css';
import whoArrowDown from '../../assets/icons/arrow-down.svg'

const ArrowLink = () => {
  return ( 
    <>
      <a 
          href='#skills'
          className='who-link'
        >
          <img
            className='who-arrow'
            src={whoArrowDown}
            alt="link to bottom" 
          />
        </a>
    </>
  );
}

export default ArrowLink;