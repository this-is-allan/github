import { ButtonContainer } from './styles';

interface ButtonProps {
  label?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, children, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      {children}
      {label && <span>{label}</span>}
    </ButtonContainer>
  )
}

export default Button