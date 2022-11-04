import styled from "styled-components";
import Background from "../../assets/templete/background2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  margin-top: 24px;

  border: none;
  outline: none;

  width: 342px;
  height: 58px;


  p{
    font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;

  color: #ffffff;

  }

  button{
    background: none;
    border:none;
    cursor: pointer;
  }
`;
