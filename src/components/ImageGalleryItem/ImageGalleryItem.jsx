import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageUrl, alt, onClick }) => (
  <GalleryItem className="gallery-item" onClick={onClick}>
    <GalleryImage src={imageUrl} alt={alt} />
  </GalleryItem>
);
