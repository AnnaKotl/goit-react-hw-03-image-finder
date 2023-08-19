import React, { Component } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Layout } from './styles/Layout';
import { fetchImages } from './API/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  handleSearch = async (newQuery) => {
    this.setState({ query: newQuery, images: [], page: 1, isLoading: true });

    const images = await fetchImages(newQuery, 1);
    this.setState({ images, isLoading: false });
  };

  handleLoadMore = async () => {
    const { query, page } = this.state;
    const nextPage = page + 1;
    const newImages = await fetchImages(query, nextPage);

    this.setState((prevState) => ({
      images: [...prevState.images, ...newImages],
      page: nextPage,
    }));
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, modalIsOpen } = this.state;

    return (
      <>
        <GlobalStyle />
        <Layout>
          <Searchbar onSearch={this.handleSearch} />
          <ImageGallery images={images} onItemClick={this.handleImageClick} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <Button onLoadMore={this.handleLoadMore} />
          )}
          {showModal && (
            <Modal
              image={selectedImage}
              onClose={this.handleCloseModal}
              onOpen={() => this.setState({ modalIsOpen: true })}
              isOpen={modalIsOpen}
            />
          )}
        </Layout>
      </>
    );
  }
}
