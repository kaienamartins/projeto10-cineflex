import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success() {
  const location = useLocation();

  const {
    name,
    cpf,
    seats: { ids },
    info: { hour, title, date },
  } = location.state;

  return (
    <Wrapper>
      <Heading>
        <h1>
          Pedido feito <br /> com sucesso!
        </h1>
      </Heading>
      <MovieInfo data-test="movie-info">
        <h3>Filme e sessão</h3>
        <p>{title}</p>
        <p>
          {date} {hour}
        </p>
      </MovieInfo>
      <MovieInfo data-test="seats-info">
        <h3>Ingressos</h3>
        {ids.map((num, i) => (
          <p key={i}>Assento {num}</p>
        ))}
      </MovieInfo>
      <MovieInfo data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </MovieInfo>

      <Link to={`/`} data-test="go-home-btn">
        <Button>Voltar pra Home</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
`;

const Heading = styled.div`
  width: 375px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 65px;

  h1 {
    color: #247a6b;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
  }
`;

const MovieInfo = styled.div`
  display: block;
  position: relative;
  top: 50px;
  margin: 0 0 30px 24px;
  text-align: left;
  align-self: flex-start;
  letter-spacing: 0.04em;
  color: #293845;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 7px;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  margin-top: 110px;
  color: #fff;
  line-height: 21px;
  font-size: 18px;
  font-weight: 400;
  height: 42px;
  width: 225px;
  background-color: #e8833a;
  border: none;
  border-radius: 3px;
  align-self: center;
  justify-self: center;
`;
