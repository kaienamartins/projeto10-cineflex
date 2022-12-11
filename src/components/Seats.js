import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Seat from "./Seat";
import Footer from "./Footer";
import SelectedColous from "./SelectedColours";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [num, setNum] = useState([]);

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
    } else {
      const i = selected.indexOf(id);
      const removeSeat = [...selected];
      removeSeat.splice(i, 1);
      setSelected(removeSeat);

      const removeNumber = [...num];
      removeNumber.splice(i, 1);
      setNum(removeNumber);
    }
  }

  return (
    <Wrapper>
      <h3>Selecione o(s) assento(s)</h3>
      <SeatsWrapper>
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            name={seat.name}
            isAvailable={seat.isAvailable}
            seatSelector={seatSelector}
            selected={selected}
          />
        ))}
      </SeatsWrapper>
      <SelectedColous/>
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
