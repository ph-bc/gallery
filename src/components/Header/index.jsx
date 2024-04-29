import styled from "styled-components";
import TextField from "../TextField";

const AppHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

export default function Header({ filterText, setFilterText }) {
  return (
    <AppHeader>
      <img src="/images/logo.png" alt="SpaceApp" />
      <TextField filterText={filterText} setFilterText={setFilterText} />
    </AppHeader>
  );
}
