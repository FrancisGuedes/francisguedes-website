import './gif.css';
import { strings } from '../../../util/strings';

const Gif = () => {
  const labelGif = {...strings.gif}
  let gif = require('../../../assets/gif/loading-gif.gif')
  return ( 
    <>
      <picture className='loading-gif-container'>
        <img 
          className='loading-gif'
          src={gif} 
          alt="wait until the page loads"
        />
        <span className='loading-text'>{labelGif.text}
          <span className='dot'>{labelGif.dots}</span>
        </span>
      </picture>
    </>
  );
}

export default Gif;