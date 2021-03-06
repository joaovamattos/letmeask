import { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-darkmode.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { database } from "../../services/firebase";
import { Button } from "../../components/Button";

import { Container, Aside, Main, Form } from "./styles";

export function Home() {
  const [roomCode, setRoomCode] = useState("");
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const { theme } = useTheme();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Está sala não existe!");
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error("Está sala já está fechada!");
      return;
    }

    history.push(`rooms/${roomCode}`);
  }

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </Form>
        </div>
      </Main>
    </Container>
  );
}
