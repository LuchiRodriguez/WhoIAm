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
    width: 70%;
    margin: 20px auto;
    text-align: center;
  }
  section {
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    div {
      textarea {
        border: 2px solid var(--green);
        border-radius: 5px;
        width: 100%;
        height: 60vh;
        resize: none;
      }
    }
  }
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 10px;
  border-bottom: 2px solid var(--green);
  font-family: LemonMilk;
  a {
    display: flex;
    align-items: center;
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
  div {
    display: none;
    list-style: none;
    margin: 0;
    padding-top: 20px;
    gap: 10px;
    position: absolute;
    flex-direction: column;
    top: 60px;
    height: 50vh;
    ul {
      padding: 0;
      margin-top: 30px;
    }
    img {
      width: 25px;
      height: 25px;
    }
    li {
      display: flex;
      align-items: flex-end;
      cursor: pointer;
      margin: 15px;
      justify-content: flex-start;
      p {
        margin: 0 0 0 10px;
      }
    }
  }
  div:hover {
    display: block;
  }
  a:first-child:hover ~ div {
    display: block;
  }
`;
