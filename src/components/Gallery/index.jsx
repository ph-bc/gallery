import styled from "styled-components";
import GenericTitle from "../GenericTitle";
import Tags from "./Tags";
import Photos from "./Photos";
import { useState } from "react";
import popularPhotos from "../../json/popularPhotos.json";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const MainGalleryContainer = styled.section`
  flex-grow: 1;
  width: 80%;
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const PopularPhotos = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const SecondaryGalleryContainer = styled.section`
  flex-grow: 1;
  width: 20%;

  button {
    background-color: transparent;
    color: #fff;
    border: 2px solid #c98cf1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
  }
`;

export default function Gallery({
  photos = [],
  onSelectedPhoto,
  onFavoriteChange,
  filterText,
}) {
  // Estado local para armazenar o filtro de tags.
  const [filter, setFilter] = useState("");

  // Filtra as fotos com base na tag selecionada e no texto de filtro.
  const filteredPhotos = photos.filter((photo) => {
    // Verifica se a tag da foto corresponde ao filtro de tags ou se não há filtro de tags.
    const matchesTag = photo.tagId.toString() === filter || filter === "";

    // Verifica se o título da foto contém o texto de filtro, ignorando maiúsculas e minúsculas, ou se não há texto de filtro.
    const matchesSearchText =
      photo.title.toLowerCase().includes(filterText.toLowerCase()) ||
      filterText === "";

    // Retorna verdadeiro se a foto corresponde tanto à tag quanto ao texto de filtro.
    return matchesTag && matchesSearchText;
  });

  // Função para lidar com o clique em uma tag.
  const handleTagClick = (tagId) => {
    setFilter(tagId.toString());
    if (tagId === 0) {
      setFilter("");
    }
  };

  return (
    <>
      <Tags onTagClick={handleTagClick} />

      <GalleryContainer>
        <MainGalleryContainer>
          <GenericTitle>Navegue pela galeria</GenericTitle>
          <PhotosContainer>
            {filteredPhotos.map((photo) => (
              <Photos
                key={photo.id}
                photo={photo}
                onExpandClick={onSelectedPhoto}
                onFavoriteChange={onFavoriteChange}
              />
            ))}
          </PhotosContainer>
        </MainGalleryContainer>
        <SecondaryGalleryContainer>
          <GenericTitle $align="center">Popular</GenericTitle>
          <PhotosContainer>
            {popularPhotos.map((photo) => (
              <PopularPhotos key={photo.id} src={photo.path} alt={photo.alt} />
            ))}
          </PhotosContainer>
          <button>Ver mais</button>
        </SecondaryGalleryContainer>
      </GalleryContainer>
    </>
  );
}
