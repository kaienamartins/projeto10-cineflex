import styled from "styled-components";

export default function Footer({ hour, weekday, title, poster }) {
  return (
    <Wrapper>
      <img src={poster} alt={title} />

      <MovieInfo>
        <p>{title}</p>
        {weekday && hour && (
          <p>
            {weekday} - {hour}
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
  margin-left: 16px;
  font-size: 22px;
  p:nth-child(1), p:nth-child(2) {
    margin-left: 10px;
  }
  p:nth-child(1) {
    margin-bottom: 10px;
  }
  
`;
