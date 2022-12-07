import styled from "styled-components";

export default function Header(){
  return(
    <Banner>
      <h1>cineflex</h1>
    </Banner>
  );
}

const Banner = styled.div `
  display: block;
  position: fixed;
  top: 0;
  width: 375px;
  height: 67px;
  background-color: #C3CFD9;

  h1 {
    font-family: 'Roboto';
    text-align: center;
    color: #E8833A;
    text-transform: uppercase;
    line-height: 60px;
    font-size: 34px;
    font-weight: 400;
  }
`