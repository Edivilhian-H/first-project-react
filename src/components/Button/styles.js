import styled from "styled-components";

export const Buntton = styled.button`
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 14px;
  width: 342px;
  height: 74px;
  margin-top: 45%;

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  border: ${props => props.isBack ? "1px solid #ffffff" : "none"};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  color: #ffffff;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  img{

transform: ${ props => props.isBack ? " rotateY(180deg)" : ""};
}
`;
