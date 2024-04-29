import styled from "styled-components";
import tags from "./data/tags.json";

const TagContainer = styled.section`
  margin: 56px 0 13px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const TagText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #d9d9d9;
`;

const TagButton = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

export default function Tags({ onTagClick }) {
  return (
    <TagContainer>
      <TagText>Busque por tags:</TagText>
      {tags.map((tag) => (
        <TagButton key={tag.id} onClick={() => onTagClick(tag.id)}>
          {tag.title}
        </TagButton>
      ))}
    </TagContainer>
  );
}
