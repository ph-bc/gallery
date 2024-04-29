import "normalize.css";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import ZoomModal from "./components/ZoomModal";
import photos from "./json/photos.json";
import { useState } from "react";
import Footer from "./components/Footer";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  // Inicializa o estado 'galleryPhotos' com os dados das fotos importados do arquivo 'photos.json'.
  const [galleryPhotos, setGalleryPhotos] = useState(photos);

  // Inicializa o estado 'selectedPhoto' como nulo. Este estado será usado para armazenar a foto selecionada pelo usuário.
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Inicializa o estado 'isModalOpen' como falso. Este estado será usado para controlar a abertura e fechamento do modal.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inicializa o estado 'filterText' como vazio. Este estado será usado para filtrar as fotos pesquisadas no campo de texto.
  const [filterText, setFilterText] = useState("");

  // Função para abrir o modal. Ela atualiza o estado 'selectedPhoto' com a foto selecionada e muda o estado 'isModalOpen' para verdadeiro.
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Função para fechar o modal. Ela muda o estado 'isModalOpen' para falso.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para alterar o estado de favorito de uma foto. Se a foto passada como argumento for a foto selecionada, o estado 'selectedPhoto' é atualizado.
  // Além disso, o estado 'galleryPhotos' é atualizado para refletir a mudança no estado de favorito da foto.
  const onFavoriteChange = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }

    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header filterText={filterText} setFilterText={setFilterText} />
        <MainContainer>
          <SideBar />
          <GallerySection>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage="src/assets/banner.png"
            />
            <Gallery
              photos={galleryPhotos}
              onSelectedPhoto={openModal}
              onFavoriteChange={onFavoriteChange}
              filterText={filterText}
            />
          </GallerySection>
        </MainContainer>
      </AppContainer>
      <Footer />

      {isModalOpen && (
        <ZoomModal
          photo={selectedPhoto}
          closeModal={closeModal}
          onFavoriteChange={onFavoriteChange}
        />
      )}
    </BackgroundGradient>
  );
}

export default App;
