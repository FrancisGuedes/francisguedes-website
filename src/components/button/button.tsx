import { createClassName } from '../../util/utility';
import './button.css';

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  labelName: string;
  onClick?: any;
  className?: string;
}
const Button = ({labelName, onClick, className}: buttonProps) => {
  let classes = createClassName('portal-button', className);
  return ( 
    <>
      <a type='button' className={classes} onClick={onClick}>
        {labelName}
      </a>
    </>
  );
}

export default Button;