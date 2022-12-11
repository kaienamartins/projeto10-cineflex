import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatMaker from "./SeatMaker";

export default function Seat() {
  const { idSessao } = useParams();
  const [session, setSession] = useState(undefined);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

    const req = axios.get(URL);

    req.then((res) => {
      setSession(res.data);
    });
    req.catch((err) => console.log(err.response.data));
  }, [idSessao]);

  function selectSeats(seat) {
    if (seat.isAvailable === false) {
      alert("Esse assento não está disponível");
    } else {
      const selected = selectedSeats.some((st) => seat.id === st.id);
      if (selected) {
        const newSeat = selectedSeats.filter((sls) => seat.id !== sls.id);
        setSelectedSeats(newSeat);
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  }

  return (
    <>
      <Container>
        <h3>Selecione o(s) assento(s)</h3>
        <SeatWrapper>
          {session.seats.map((seat) => (
            <SeatMaker
              key={seat.id}
              seat={seat}
              selectSeats={selectSeats}
              selected={selectedSeats.some((s) => seat.id === s.id)}
            />
          ))}
        </SeatWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-bottom: 100px;
  padding-top: 50px;
  align-items: center;

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

const SeatWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
