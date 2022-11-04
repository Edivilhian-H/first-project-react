import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/templete/people.svg";
import Arrow from "../../assets/templete/arrow.svg";

import H1 from "../../components/Title"
import ContainerIntens from "../../components/containerItens"
import Buntton from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={People} />

      <ContainerIntens>
        <H1>Olá!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Buntton onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Buntton>
      </ContainerIntens>
    </Container>
  );
};

export default App;
