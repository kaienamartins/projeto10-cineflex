import styled from "styled-components";

export default function Footer({ hour, day, title, posterURL }) {
  return (
    <Wrapper data-test="footer">
      <img src={posterURL} alt={title} />
      <MovieInfo>
        <h2>{title}</h2>
        {day && hour && (
          <p>
            {day} - {hour}
          </p>
        )}
      </MovieInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #dfe6ed;
  padding: 14px 10px;
  display: flex;
  img {
    width: 64px;
    height: 89px;
    position: relative;
    left: 15px;
    top: 12px;
  }
`;

const MovieInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 35px;
  padding-bottom: 15px;
  
  h2, p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    white-space: nowrap;
  }

  p{
    padding-top: 5px;
  }

`;
