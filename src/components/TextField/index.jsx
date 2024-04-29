import styled from "styled-components";
import search from "./search.png";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const TextInput = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #aeaeae;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function TextField({ filterText, setFilterText }) {
  return (
    <Container>
      <TextInput
        type="text"
        placeholder="O que você procura?"
        value={filterText}
        onChange={(event) => setFilterText(event.target.value)}
      />
      <SearchIcon src={search} alt="Ícone de busca" />
    </Container>
  );
}
