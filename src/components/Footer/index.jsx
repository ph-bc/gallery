import styled from "styled-components";
import facebook from "/public/svgs/social/facebook.svg";
import instagram from "/public/svgs/social/instagram.svg";
import twitter from "/public/svgs/social/twitter.svg";

const AppFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;

  div {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      margin-right: 32px;
    }
  }

  p {
    font-size: 16px;
    color: white;
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <AppFooter>
      <div>
        <li>
          <a href="#">
            <img src={facebook} alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="Ícone do Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Ícone do Twitter" />
          </a>
        </li>
      </div>
      <p>Desenvolvido por Pedro</p>
    </AppFooter>
  );
}
