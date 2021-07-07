import { TagContainer } from './styles';

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children, ...rest }: TagProps) => {
  return (
    <TagContainer {...rest}>
      {children}
    </TagContainer>
  )
}

export default Tag