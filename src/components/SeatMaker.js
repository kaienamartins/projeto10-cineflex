import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SeatMaker({ seat, selectSeats, selected }) {
  const [statusSeat, setStatusSeat] = useState("selected");

  useEffect(() => {
    if (selected) {
      setStatusSeat("selected");
    } else if (seat.isAvailable) {
      setStatusSeat("available");
    } else {
      setStatusSeat("unavailable");
    }
  }, [selected, seat]);

  return (
    <SeatItem status={statusSeat} onClick={() => selectSeats(seat)}>
      {seat.name}
    </SeatItem>
  );
}

const SeatItem = styled.div`
  border: 1px solid ${(props) => Colours[props.statusSeat].border};
  background-color: ${(props) => Colours[props.statusSeat].background};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;

const Colours = {
  available: { background: "#C3CFD9", border: "#808F9D" },
  selected: { background: "#1AAE9E", border: "#0E7D71" },
  unavailable: { background: "#FBE192", border: "#F7C52B" },
};
