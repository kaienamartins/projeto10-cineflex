import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionMaker({ movie }) {
  return (
    <Wrapper>
      {movie.weekday} - {movie.date}
      <Showtime>
        {movie.showtimes.map((st) => (
          <Link to={`/assentos/${st.id}`} key={st.name}>
            <button>{st.name}</button>
          </Link>
        ))}
      </Showtime>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  padding: 0 20px;
  color: #293845;
`;

const Showtime = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
    background-color: #e8833a;
    color: #fff;
    width: 83px;
    height: 43px;
    font-weight: 400;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
