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
  h2 {
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
        font-size: x-large;
        padding: 10px;
      }
    }
  }
`;

export const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
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
  p {
    margin-right: 100px;
  }
  img {
    width: 40px;
    height: 40px;
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
    right: 0;
    ul {
      padding: 0;
      margin-top: 20px;
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
      justify-content: space-between;
      p {
        margin: 0 0 0 10px;
      }
    }
  }
  div:hover {
    display: block;
  }
  img:hover ~ div {
    display: block;
  }
`;

export const CreatePopUp = styled.div`
  display: ${({ showPopUp }) => (showPopUp ? "inline-block" : "none")};
  width: 600px;
  height: 400px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border: 2px solid var(--green);
  border-radius: 10px;
`;

export const ButtonPopUp = styled.button`
  width: 40px;
  height: 40px;
  font-size: x-large;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: 2px solid var(--green);
  border-radius: 100%;
  color: var(--green);
  background-color: white;
`;

export const ProfilePage = styled.div`
  font-family: LemonMilk;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    img {
      border: 2px solid var(--green);
      border-radius: 100%;
      width: 100px;
      height: 100px;
    }
  }
  section {
    margin-left: 30px;
    img {
      border: none;
      border-radius: 0;
      width: 30px;
      height: 30px;
    }
  }
`;

export const AreasPage = styled.div`
  font-family: LemonMilk;
  text-align: center;
`;
