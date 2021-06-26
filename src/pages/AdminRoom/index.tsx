import { useHistory, useParams } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-darkmode.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { database } from "../../services/firebase";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";

// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";

import { Container, Main, ToggleThemeButton } from "./styles";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  const { title, questions } = useRoom(roomId);
  // const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <Container>
      <header>
        <div className="content">
          <div className="header-wrapper">
            {theme.title === "dark" ? (
              <img height="45px" src={logoDarkModeImg} alt="logo" />
            ) : (
              <img height="45px" src={logoImg} alt="logo" />
            )}

            <ToggleThemeButton type="button" onClick={() => toggleTheme()}>
              {theme.title === "dark" ? (
                <FiMoon size={16} color={theme.colors.black} />
              ) : (
                <FiSun size={16} color={theme.colors.black} />
              )}
            </ToggleThemeButton>
          </div>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </Main>
    </Container>
  );
}
