import styled from "styled-components";

export default function SelectedColous() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <p>Selecionado</p>
        <Buttons status="selected" />
      </ButtonWrapper>
      <ButtonWrapper>
        <p>Disponível</p>
        <Buttons status="available" />
      </ButtonWrapper>
      <ButtonWrapper>
        <p>Indisponível</p>
        <Buttons status="unavailable" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
    color: #4E5A65;
  }
`;

const Buttons = styled.div`
  height: 26px;
  width: 26px;
  margin: 9px 4px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${(props) => Colours[props.status].border};
  background-color: ${(props) => Colours[props.status].background};
`;

const Colours = {
  available: { background: "#C3CFD9", border: "#808F9D" },
  selected: { background: "#1AAE9E", border: "#0E7D71" },
  unavailable: { background: "#FBE192", border: "#F7C52B" }
};
