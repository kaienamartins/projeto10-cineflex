import styled from "styled-components";

export default function Seat({
  id,
  name,
  isAvailable,
  seatSelector,
  selected,
}) {
  const isSelected = selected.includes(id);

  if (isAvailable === true) {
    return (
      <Button
        onClick={() => seatSelector(id, name)}
        key={id}
        bgcolor={isSelected ? "#1AAE9E" : "#C3CFD9"}
        bordercolor={isSelected ? "#0E7D71" : "#7B8B99"}
      >
        {name}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => alert("Esse assento não está disponível")}
        key={id}
        bgcolor={"#FBE192"}
        bordercolor={"#F7C52B"}
      >
        {name}
      </Button>
    );
  }
}

const Button = styled.button`
  height: 26px;
  width: 26px;
  margin: 9px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 12px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
`;
