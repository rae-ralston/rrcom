import styled from "@emotion/styled";

export const Pill = styled.div`
  width: 20px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid maroon;

  ${(props) => props.isOn && "background-color: maroon;"}
`;
