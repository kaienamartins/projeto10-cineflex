import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Seat from "./Seat";
import Footer from "./Footer";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [num, setNum] = useState([]);
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const req = axios.get(URL);
    req.then((res) => {
      setSeats(res.data.seats);
      setInfo({
        title: res.data.movie.title,
        posterURL: res.data.movie.posterURL,
        hour: res.data.name,
        day: res.data.day.weekday,
        date: res.data.day.date,
      });
    });

    req.catch((err) => {
      console.log(err.response.data);
    });
  }, [idSessao]);

  function seatSelector(id, name) {
    if (!selected.includes(id)) {
      const newSelected = [...selected, id];
      setSelected(newSelected);
      const seatSelected = [...num, name];
      setNum(seatSelected);
      console.log("funcionou");
    } else {
      const index = selected.indexOf(id);
      const removeSeat = [...selected];
      removeSeat.splice(index, 1);
      setSelected(removeSeat);
      const removeNumber = [...num];
      removeNumber.splice(index, 1);
      setNum(removeNumber);
    }
  }

  function bookSeats(e) {
    e.preventDefault();

    if (selected.length === 0) {
      alert("Selecione seus assentos!");
      return;
    } else {
      const url =
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
      const body = {
        ids: selected,
        name: name,
        cpf: CPF,
      };

      const request = axios.post(url, body);

      request
        .then(() => {
          navigate("/sucesso", {
            state: {
              name: name,
              cpf: CPF,
              info: info,
              seats: { ids: selected },
            },
          });
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Wrapper>
      <h3>Selecione o(s) assento(s)</h3>
      <SeatsWrapper>
        {seats.map((seat) => (
          <Seat
            data-test="seat"
            id={seat.id}
            key={seat.id}
            name={seat.name}
            isAvailable={seat.isAvailable}
            seatSelector={seatSelector}
            selected={selected}
          />
        ))}
      </SeatsWrapper>
      <WrapperColour>
        <ButtonWrapper>
          <Buttons
            selected={selected}
            bgcolor={"#1AAE9E"}
            bordercolor={"#0E7D71"}
          ></Buttons>
          <p>Selecionado</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <Buttons
            selected={selected}
            bgcolor={"#C3CFD9"}
            bordercolor={"#7B8B99"}
          ></Buttons>
          <p>Disponível</p>
        </ButtonWrapper>
        <ButtonWrapper>
          <Buttons
            selected={selected}
            bgcolor={"#FBE192"}
            bordercolor={"#F7C52B"}
          ></Buttons>
          <p>Indisponível</p>
        </ButtonWrapper>
      </WrapperColour>

      <Form onSubmit={bookSeats}>
        <label htmlFor="Name">Nome do comprador:</label>
        <input
          data-test="client-name"
          type="text"
          id="Name"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="CPF">CPF do comprador:</label>
        <input
          data-test="client-cpf"
          type="text"
          id="CPF"
          placeholder="Digite seu CPF..."
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          minLength="11"
          required
        />

        <button data-test="book-seat-btn" type="submit">
          Reservar assento(s)
        </button>
      </Form>
      <Footer
        title={info.title}
        posterURL={info.posterURL}
        weekday={info.weekday}
        day={info.day}
        hour={info.hour}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #293845;
  }
`;

const SeatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 140px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

  label {
    color: #293845;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 7px;
  }

  input {
    height: 51px;
    padding: 0 18px;
    margin-bottom: 7px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      font-style: italic;
      color: #afafaf;
    }
  }

  button {
    height: 42px;
    width: 225px;
    margin-top: 50px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    align-self: center;
  }
`;

const WrapperColour = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  position: relative;
  left: 25px;
  justify-content: space-between;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 15px;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 15.23px;
    color: #4e5a65;
  }
`;

const Buttons = styled.div`
  height: 26px;
  width: 26px;
  margin: 9px 4px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
`;
