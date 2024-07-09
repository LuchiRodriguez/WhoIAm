import styled, { createGlobalStyle } from "styled-components";
import LemonMilk from "./fonts/LEMONMILK-Medium.otf";

export const GlobalStyle = createGlobalStyle`
	:root {
	--green: #2E5E4E;
	--white: #DBD3D8;
	}
    @font-face {
		font-family: LemonMilk;
		src: url(${LemonMilk});
	}
`;

export const HomePage = styled.div`
  font-family: LemonMilk;
  h1 {
    text-align: center;
  }
  section {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid var(--green);
  font-family: LemonMilk;
  a {
    display: flex;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
  h3 {
    margin-left: 10px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    gap: 10px;
    img {
      width: 25px;
      height: 25px;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      p {
        margin: 5px 0 0;
      }
    }
  }
`;
