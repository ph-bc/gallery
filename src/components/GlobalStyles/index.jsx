import { createGlobalStyle, css } from "styled-components";
import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf";
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf";

// Criando as declarações @font-face para as fontes
const FontFaces = css`
  @font-face {
    font-family: "GandhiSansRegular";
    src: local("Gandhi Sans Regular"), local("GandhiSansRegular"),
      url(${GandhiSansRegular}) format("opentype");
  }

  @font-face {
    font-family: "GandhiSansBold";
    src: local("Gandhi Sans Bold"), local("GandhiSansBold"),
      url(${GandhiSansBold}) format("opentype");
  }
`;

const GlobalStyles = createGlobalStyle`
// Incluindo as declarações de fonte no CSS global
  ${FontFaces}

  html {
    font-family: 'GandhiSansRegular', sans-serif;
  }
`;

export default GlobalStyles;
