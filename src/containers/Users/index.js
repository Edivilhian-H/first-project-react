import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Avatar from "../../assets/templete/avatar.svg";
import Arrow from "../../assets/templete/arrow.svg";
import Trash from "../../assets/templete/trash.png";

import H1 from "../../components/Title"
import ContainerIntens from "../../components/containerItens"
import Buntton from "../../components/Button"
import { Container, Image, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: neWUsers } = await axios.get("http://localhost:3001/users");

      setUsers(neWUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUeser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={Avatar} />

      <ContainerIntens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUeser(user.id)}>
                <img alt="Lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Buntton isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Buntton>
      </ContainerIntens>
    </Container>
  );
};

export default Users;
