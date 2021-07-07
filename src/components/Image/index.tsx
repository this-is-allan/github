import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
  image: {
    alt: string;
    src: string;
  }
}

const Image = ({ image }: ImageProps) => (
  <LazyLoadImage
    alt={image.alt}
    effect="blur"
    src={image.src}
  />
);

export default Image