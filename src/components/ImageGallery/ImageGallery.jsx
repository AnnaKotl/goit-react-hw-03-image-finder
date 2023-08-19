import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onItemClick }) => (
  <GalleryList className="gallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        imageUrl={image.webformatURL}
        alt={image.tags}
        onClick={() => onItemClick(image)}
      />
    ))}
  </GalleryList>
);
