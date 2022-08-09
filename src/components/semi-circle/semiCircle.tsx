import { Link } from 'react-router-dom';
import './semiCircle.css';

interface semiCircleProps {
  colorSemiCircle?: string;
}

const SemiCircle = ({ colorSemiCircle }: semiCircleProps) => {
  return ( 
    <>
      <div className="semi-circle-wrapper">
        <div className="semi-circle">
          <Link 
            rel="canonical" 
            data-new-state="work" 
            className='work-title-link circle' 
            to="/work" 
          />
        </div>
      </div>
    </>
  );
}

export default SemiCircle;