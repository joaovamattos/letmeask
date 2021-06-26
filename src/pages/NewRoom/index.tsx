import { useState } from "react";
import { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-darkmode.svg";

import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { Button } from "../../components/Button";

import { Container, Aside, Main, Form } from "./styles";
import { useEffect } from "react";

export function NewRoom() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e repostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Aside>
      <Main>
        <div className="main-content">
          {theme.title === "dark" ? (
            <img src={logoDarkModeImg} alt="Letmeask" height="64px" />
          ) : (
            <img src={logoImg} alt="Letmeask" height="64px" />
          )}
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </Main>
    </Container>
  );
}
