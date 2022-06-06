import { createGlobalStyle } from "styled-components"
import background from "../assets/background.svg"
import ProximaNova from "../assets/webfonts/ProximaNova-Semibold.woff"

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
	font-family: 'ProximaNova-Semibold';
	src: url('${ProximaNova}') format('woff');
	font-style: normal;
	font-weight: normal;
}

* {
  box-sizing: border-box;
}
html,
body {
    background: url(${background});
  margin: 0;
  padding: 0;
}
`
