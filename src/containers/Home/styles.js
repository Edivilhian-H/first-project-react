import styled from "styled-components";
import Background from "../../assets/templete/background1.svg";

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

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
  color: #eeeeee;

`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  border: none;
  outline: none;

  width: 342px;
  height: 58px;
  padding-left: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  margin-bottom: 34px;

  color: #ffffff;
`;

