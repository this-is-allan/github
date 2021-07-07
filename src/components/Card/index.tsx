import Image from '../Image';

import { CardContainer } from './styles';
interface CardProps {
  title: string;
  image: string;
}

const Card = ({ image, title }: CardProps) => {
  return (
    <CardContainer>
      <div className="card-cover">
        <Image image={{ src: image, alt: 'avatar'}} />
      </div>
      <div className="card-title">
        <span>{title}</span>
      </div>
    </CardContainer>
  )
}

export default Card