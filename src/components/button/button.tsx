import './button.css';

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  labelName: string;
  onClick?: any;
  className: string;
}
const Button = ({labelName, onClick, className}: buttonProps) => {
  
  return ( 
    <>
      <a type='button' className={className} onClick={onClick}>
        {labelName}
      </a>
    </>
  );
}

export default Button;