import React, { useState, useEffect } from 'react';
import { GlobalStyle, StyledApp } from './styles/GlobalStyle';
import { Layout } from './styles/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { fetchImages } from './API/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const toastOptions = {
  position: 'top-right',
  duration: 3000,
  style: {
    border: 'none',
    padding: '16px 20px',
    color: '#713200',
    backgroundColor: '#f8f4ba',
    fontFamily: 'Ubuntu',
  },
};

const searchSchema = Yup.object().shape({
  query: Yup.string().trim().required('Please enter a search term'),
});

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchId, setSearchId] = useState(nanoid());
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await searchSchema.validate({ query });

        setImages([]);
        setPage(1);
        setIsLoading(true);
        setSearchId(nanoid());
        setSearchError(null);

        const fetchedImages = await fetchImages(query, 1);
        setImages(fetchedImages);
        setIsLoading(false);

        if (fetchedImages.length === 0) {
          setSearchError('No results found.');
        }
      } catch (error) {
        toast.error(error.message, toastOptions);
      }
    };

    fetchData();
  }, [query]);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const newImages = await fetchImages(query, nextPage);

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPage(nextPage);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

  return (
    <>
      <StyledApp>
        <GlobalStyle />
        <Layout>
          <Searchbar key={searchId} onSearch={setQuery} />
          <ImageGallery images={images} onItemClick={handleImageClick} />
          {isLoading && <Loader />}
          {searchError && <p>{searchError}</p>}
          {shouldRenderLoadMoreButton && images.length >= 12 && (
            <Button show={shouldRenderLoadMoreButton} onClick={handleLoadMore} />
          )}
          {showModal && <Modal image={selectedImage} onClose={handleCloseModal} />}
          <Toaster position="top-right" />
        </Layout>
      </StyledApp>
    </>
  );
};