import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <Banner>
      <Link to="/">
       <h1>cineflex</h1>
      </Link>
    </Banner>
  );
}

const Banner = styled.div `
  position: fixed;
  top: 0;
  width: 375px;
  height: 67px;
  background-color: #C3CFD9;
  z-index: 1;

  h1 {
    font-family: 'Roboto';
    text-align: center;
    color: #E8833A;
    text-transform: uppercase;
    line-height: 60px;
    font-size: 34px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
`