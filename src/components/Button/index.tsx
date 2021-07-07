import { ButtonContainer } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button