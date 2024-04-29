import styled from "styled-components";

const GenericTitle = styled.h2`
  color: #7b78e5;
  font-weight: 400;
  font-size: 32px;
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`;

export default GenericTitle;