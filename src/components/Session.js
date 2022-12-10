import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SessionMaker from "./SessionMaker";
import Footer from "./Footer";

export default function Session() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;

    const req = axios.get(URL);

    req.then((res) => {
      setMovie(res.data);
    });

    req.catch((err) => console.log(err.response.data));
  }, [idMovie]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <Wrapper>
      <h3>Selecione o horário</h3>
      {movie.days.map((m) => (
        <SessionMaker movie={m} key={m.id} />
      ))}
       <Footer poster={movie.posterURL} title={movie.title} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;

  h3 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    text-align: center;
    line-height: 90px;
    letter-spacing: 0.04em;
  }
`;
