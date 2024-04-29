import styled from "styled-components";
import IconButton from "../../IconButton";

const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 20px 20px 0 0;
`;

export default function Photos({
  photo,
  expand = false,
  onExpandClick,
  onFavoriteChange,
}) {
  const favIcon = photo.favorite
    ? "icons/favorite.png"
    : "icons/unfavorite.png";

  return (
    <Figure $expand={expand}>
      <Image src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <footer>
          <h4>{photo.font}</h4>
          <IconButton onClick={() => onFavoriteChange(photo)}>
            <img src={favIcon} alt="Curtir/Descurtir" />
          </IconButton>
          {!expand && (
            <IconButton
              aria-hidden={expand}
              onClick={() => onExpandClick(photo)}
            >
              <img src="icons/expand.png" alt="Expandir imagem" />
            </IconButton>
          )}
        </footer>
      </figcaption>
    </Figure>
  );
}
