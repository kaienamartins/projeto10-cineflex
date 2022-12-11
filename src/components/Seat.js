import styled from "styled-components";

export default function Seat({ id, name, isAvailable, selectSeat, selected }) {
  const isSelected = selected.includes(id);

  if (isAvailable === false) {
    return (
      <Button
        onClick={() => alert("Esse assento não está disponível")}
        key={id}
        color={"#FBE192"}
        bordercolor={"#F7C52B"}
      >
        {name}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => selectSeat(id, name)}
        key={id}
        color={isSelected ? "#1AAE9E" : "#C3CFD9"}
        bordercolor={isSelected ? "#0E7D71" : "#7B8B99"}
      >
        {name}
      </Button>
    );
  }
}

const Button = styled.button`
  height: 24px;
  width: 24px;
  margin: 9px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 12px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
`;
